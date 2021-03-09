import React from "react"

import "./styles.scss"
import { PopupProps } from "./types";
import { app } from "@kubevious/ui-framework"

export const { sharedState } = app

export const Popup: React.FunctionComponent<PopupProps> = ({ popupContent }) => {
    function closePopup() {
        sharedState.set("popup_window", null)
    }

    return (
        <div data-testid="popup" id="popup" className="popup">
            {popupContent && <div className="popup-contents">{popupContent}</div>}
            <button className="close" onClick={closePopup} />
        </div>
    )
}
