import React from "react"
import { ClassComponent } from "@kubevious/ui-framework"
import ReactDOM from "react-dom"
import $ from "jquery"
import _ from "the-lodash"
import "golden-layout/src/css/goldenlayout-base.css"
import "golden-layout/src/css/goldenlayout-dark-theme.css"
import GoldenLayoutLib from "golden-layout"

import "./styles.scss"
import { InternalGoldenComponent, GoldenLayoutWindowInfo, GoldenLayoutComponentProps } from "./types"

const isTesting = process.env.IS_TESTING;

export class GoldenLayout extends ClassComponent<GoldenLayoutComponentProps> {
    private _components: InternalGoldenComponent[]
    private _layoutConfig: GoldenLayoutLib.Config
    private _layout: GoldenLayoutLib | undefined
    private _windows: InternalGoldenComponent[]
    constructor(props: GoldenLayoutComponentProps | Readonly<GoldenLayoutComponentProps>) {
        super(props)
        this._layoutConfig = {}
        this._components = []
        this._windows = props.windows || []
    }

    get components(): InternalGoldenComponent[] {
        return this._components
    }

    get windows(): InternalGoldenComponent[] {
        return this._windows
    }

    componentDidMount() {
        this.windows.forEach((component: InternalGoldenComponent) => {
            this._register(component)
        })
        !isTesting && this._activateLayout()
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
                                        this._getLocationLayout("main"),
                                        this._getLocationLayout("bottom"),
                                    ],
                                },
                                this._getLocationLayout("right"),
                            ],
                        },
                    ],
                },
            ],
        }
        const container = $("#layoutContainer")
        this._layout = new GoldenLayoutLib(this._layoutConfig, container)
        this._components.forEach((component) => {
            component.id &&
                this._setupContent(component.id, component.component)
        })
        // Component from 'golden-layout'
        this._layout.on("componentCreated", (component: any) => {
            self._triggerComponentResizeEvent(component)

            const info = this._getComponent(component.config.component)
            info.goldenComponent = component
            info.goldenContainer = component.container

            component.container.on("resize", function () {
                self._triggerComponentResizeEvent(component)
            })
        })

        // Component from 'golden-layout'
        this._layout.on("tabCreated", (tab: any) => {
            const info = this._getComponent(tab.contentItem.config.component)
            info.goldenTab = tab

            tab.closeElement.off("click").click((e: { target: { parentNode: { title: string } } }) => {
                const component = this._components.find(
                    (item) => item.name === e.target.parentNode.title
                )

                if (component && component.id) {
                    const id = component.id
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

    _register(info: InternalGoldenComponent): void {
        const id = _.camelCase(info.name) + "Component";
        this._components.push({ ...info, id })
    }

    activateComponent(id: string): void {
        const info = this._getComponent(id)
        if (!info.goldenTab) {
            return
        }

        const stack = info.goldenTab.contentItem.parent
        const stackComponent = _.head(
            stack.contentItems.filter((x: { config: { component: string } }) => x.config.component === id)
        )
        if (stackComponent) {
            stack.setActiveContentItem(stackComponent)
        }
    }

    private _getComponent(id: string): InternalGoldenComponent {
        return _.filter(this._components, (x: InternalGoldenComponent) => x.id === id)[0]
    }

    hideComponent(id: string) {
        const info = this._getComponent(id)
        info.goldenContainer.close()
    }

    showComponent(id: string) {
        const info = this._getComponent(id)
        const componentLayout = this._getComponentLayout(info)
        this._layout &&
            this._layout.root.contentItems[0].addChild(componentLayout)
    }

    private _getLocationComponents(location: string): GoldenLayoutWindowInfo[] {
        return _.filter(this._components, (x: GoldenLayoutWindowInfo) => x.location === location)
    }

    private _getLocationLayout(location: string): GoldenLayoutLib.ItemConfigType {
        const components = this._getLocationComponents(location)
        if (components.length === 1) {
            return this._getComponentLayout(components[0])
        }

        const layout: GoldenLayoutLib.ItemConfigType = {
            type: "stack",
        }

        if (location !== "main") {
            layout.height = 20
        }
        layout.content = _.map(components, (x: InternalGoldenComponent) =>
            this._getComponentLayout(x)
        )
        return layout
    }

    private _getComponentLayout(component: InternalGoldenComponent): GoldenLayoutLib.ItemConfigType {
        // Component from 'golden-layout'
        const layout: any = {}

        layout.type = "react-component"
        layout.component = component.id
        layout.title = component.name
        layout.componentState = {}
        layout.props = _.clone(this.props)
        if (component.skipClose) {
            layout.isClosable = false
        }
        if (component.width) {
            layout.width = component.width
        }
        if (component.height) {
            layout.height = component.height
        }
        if (component.allowVerticalScroll) {
            layout.componentState.allowVerticalScroll =
                component.allowVerticalScroll
        }
        return layout
    }

    private _setupContent(name: string, component: any): void {
        this._layout && this._layout.registerComponent(name, component)
    }

    render() {
        window.React = React
        window.ReactDOM = ReactDOM

        return <div data-testid="golden-layout" id="layoutContainer" />
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
