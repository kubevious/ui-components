import React from "react"
import "./styles.scss"
import { PopupProps } from "./types";

export const Popup: React.FunctionComponent<PopupProps> = ({ popupContent, closePopup }) => {
    return (
        <div data-testid="popup" id="popup" className="popup">
            <div className="popup-contents">{popupContent}</div>
            <button className="close" onClick={closePopup} />
        </div>
    )
}
