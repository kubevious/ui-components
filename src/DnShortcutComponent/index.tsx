import React from "react"
import { MarkerDict, SelectedData } from "./types"
import { DnComponent } from "../DnComponent"
import { app } from "@kubevious/ui-framework"

export const { sharedState } = app

import "./styles.scss"

export const DnShortcutComponent: React.FunctionComponent<SelectedData> = ({
    dn,
    options,
    errors = 0,
    warnings = 0,
    markers = [],
}) => {
    const clickDn = (): void => {
        sharedState.set("selected_dn", dn)
        sharedState.set("auto_pan_to_selected_dn", true)
        sharedState.set("popup_window", null)
    }

    const markerDict = sharedState.get("markers_dict") || {}

    let markerItems: MarkerDict[] = []
    if (markers) {
        markerItems = markers
            .map((x: React.Key) => markerDict[x])
            .filter((x) => x)
    }

    return (
        <div data-testid='dn-shortcut-component' className="dn-shortcut" onClick={() => clickDn()}>
            <DnComponent dn={dn} options={options} />

            <div className="dn-alert">
                {!(!markers || markers.length === 0) &&
                    markerItems.map(({ shape, color }) => (
                        <div className="marker">
                            <i
                                key={shape}
                                className="fa"
                                style={{ color: color }}
                                dangerouslySetInnerHTML={{ __html: `&#x${shape};` }}
                            />
                        </div>
                    ))}
                {errors > 0 && (
                    <div className="indicator error-object">
                        {errors > 1 && errors}
                    </div>
                )}
                {warnings > 0 && (
                    <div className="indicator warning-object">
                        {warnings > 1 && warnings}
                    </div>
                )}
            </div>
        </div>
    )
}
