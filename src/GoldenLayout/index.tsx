import React, { RefObject } from "react"
import { ClassComponent } from "@kubevious/ui-framework"
import ReactDOM from "react-dom"
import $ from "jquery"
import _ from "the-lodash"
import "golden-layout/src/css/goldenlayout-base.css"
import "golden-layout/src/css/goldenlayout-dark-theme.css"
import GoldenLayoutLib from "golden-layout"

import "./styles.scss"
import { InternalGoldenComponent, GoldenLayoutWindowInfo, GoldenLayoutComponentProps, GoldenLayoutLocation } from "./types"

const isTesting = process.env.IS_TESTING;

export class GoldenLayout extends ClassComponent<GoldenLayoutComponentProps> {
    private _components: InternalGoldenComponent[] = []
    private _componentDict: Record<string, InternalGoldenComponent> = {}
    private _layoutConfig: GoldenLayoutLib.Config
    private _layout: GoldenLayoutLib | undefined
    private _layoutRef : RefObject<any>;

    constructor(props: GoldenLayoutComponentProps | Readonly<GoldenLayoutComponentProps>) {
        super(props)
        this._layoutRef = React.createRef();
        this._layoutConfig = {}
    }

    get windows(): GoldenLayoutWindowInfo[] {
        return this.props.windows || [];
    }

    componentDidMount() {
        for(let windowInfo of this.windows)
        {
            this._register(windowInfo);
        }

        if (!isTesting) {
            this._activateLayout()
        }
    }

    private _activateLayout(): void {
        const self = this

        this._layoutConfig = {
            content: [
                {
                    type: "column",
                    content: [
                        {
                            type: "row",
                            content: [
                                {
                                    type: "column",
                                    content: [
                                        this._getLocationLayout(GoldenLayoutLocation.main),
                                        this._getLocationLayout(GoldenLayoutLocation.bottom),
                                    ],
                                },
                                this._getLocationLayout(GoldenLayoutLocation.right),
                            ],
                        },
                    ],
                },
            ],
        }
        if (this._layoutRef.current) {
            console.info("[GoldenLayout] layout-ref: ", this._layoutRef.current);
        } else {
            console.error("[GoldenLayout] missing layout-ref")
        }
        const container = $(this._layoutRef.current.id);
        this._layout = new GoldenLayoutLib(this._layoutConfig, container)
        this._components.forEach((component) => {
            this._setupContent(component)
        })
        // Component from 'golden-layout'
        this._layout.on("componentCreated", (component: any) => {
            self._triggerComponentResizeEvent(component)

            const internalComponent = this._getComponent(component.config.component)
            if (!internalComponent) {
                return;
            }
            internalComponent.goldenComponent = component
            internalComponent.goldenContainer = component.container

            component.container.on("resize", function () {
                self._triggerComponentResizeEvent(component)
            })
        })

        // Component from 'golden-layout'
        this._layout.on("tabCreated", (tab: any) => {
            const internalComponent = this._getComponent(tab.contentItem.config.component)
            if (!internalComponent) {
                return;
            }
            internalComponent.goldenTab = tab

            tab.closeElement.off("click").click((e: { target: { parentNode: { title: string } } }) => {
                const component = this._components.find(
                    (item) => item.info.title === e.target.parentNode.title
                )

                if (component && component.info.id) {
                    const id = component.info.id
                    this.hideComponent(id)
                }
            })
        })

        this._layout.init()

        this.props.handleLayout && this.props.handleLayout(this)

        window.addEventListener("resize", () => {
            this._layout && this._layout.updateSize()
        })
    }

    private _register(windowInfo: GoldenLayoutWindowInfo)
    {
        const internalWindow : InternalGoldenComponent = {
            id: windowInfo.id,
            info: windowInfo
        } 
        this._components.push(internalWindow)
        this._componentDict[windowInfo.id] = internalWindow;
    }

    activateComponent(id: string): void {
        const internalComponent = this._getComponent(id)
        if (!internalComponent) {
            return;
        }
        if (!internalComponent.goldenTab) {
            return
        }

        const stack = internalComponent.goldenTab.contentItem.parent
        const stackComponent = _.head(
            stack.contentItems.filter((x: { config: { component: string } }) => x.config.component === id)
        )
        if (stackComponent) {
            stack.setActiveContentItem(stackComponent)
        }
    }

    private _getComponent(id: string): InternalGoldenComponent | null {
        const internalComponent = this._componentDict[id];
        if (!internalComponent) {
            console.error("[_getComponent] unknown component: ", id);
            return null;
        }
        return internalComponent;
    }

    hideComponent(id: string) {
        const internalComponent = this._getComponent(id)
        if (!internalComponent) {
            console.error("[hideComponent] unknown component: ", id);
            return;
        }
        internalComponent.goldenContainer.close()

        if (this.props.handleClose) {
            this.props.handleClose(id, internalComponent.info);
        }
    }

    showComponent(id: string) {
        if (!this._layout) {
            return;
        }
        const internalComponent = this._getComponent(id)
        if (!internalComponent) {
            console.error("[showComponent] unknown component: ", id);
            return;
        }
        const componentLayout = this._getComponentLayout(internalComponent)
        this._layout.root.contentItems[0].addChild(componentLayout)
    }

    private _getLocationComponents(location: GoldenLayoutLocation) {
        return _.filter(this._components, (x) => x.info.location === location)
    }

    private _getLocationLayout(location: GoldenLayoutLocation): GoldenLayoutLib.ItemConfigType {
        const components = this._getLocationComponents(location)
        const layout: GoldenLayoutLib.ItemConfigType = {
            type: "stack",
        }

        if (location !== GoldenLayoutLocation.main) {
            const heights = components.map(x => x.info.height).filter(x => _.isNotNullOrUndefined(x));
            if (heights.length > 0)
            {
                layout.height = _.max(heights);
            }

            const widths = components.map(x => x.info.width).filter(x => _.isNotNullOrUndefined(x));
            if (widths.length > 0)
            {
                layout.width = _.max(widths);
            }
        }

        layout.content = _.map(components, (x: InternalGoldenComponent) =>
            this._getComponentLayout(x)
        )
        return layout
    }

    private _getComponentLayout(component: InternalGoldenComponent): GoldenLayoutLib.ItemConfigType {
        // Component from 'golden-layout'
        const layout: GoldenLayoutLib.ItemConfigType = {
            type: "react-component",
            component: component.info.id,
            title: component.info.title,
            componentState: {},
            props: _.clone(this.props),
        }

        // layout.type = "react-component"
        // layout.component = component.id
        // layout.title = component.info.name
        // layout.componentState = {}
        // layout.props = _.clone(this.props)
        if (component.info.skipClose) {
            layout.isClosable = false
        }
        if (component.info.width) {
            layout.width = component.info.width
        }
        if (component.info.height) {
            layout.height = component.info.height
        }
        if (component.info.allowVerticalScroll) {
            (layout as any).componentState.allowVerticalScroll =
                component.info.allowVerticalScroll
        }
        return layout
    }

    private _setupContent(component: InternalGoldenComponent): void {
        if (!component.info.id) {
            return;
        }
        if (!this._layout) {
            return;
        }
        this._layout.registerComponent(component.info.id, component.info.component);
    }

    render() {
        window.React = React
        window.ReactDOM = ReactDOM

        return <div data-testid="golden-layout" ref={this._layoutRef} />
    }

    // Component from 'golden-layout'
    private _triggerComponentResizeEvent(component: any): void {
        this._triggerEvent("layout-resize-" + component.config.component)
    }

    private _triggerEvent(id: string): void {
        const a = $(document).trigger(id)
        console.log("EVENT: " + id)
        console.log("Target: " + a)
    }
}
