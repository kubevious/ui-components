import React, { FC, useState } from 'react';
import { subscribeToSharedState, useSharedState } from '@kubevious/ui-framework';
import { Popup } from '../Popup';


export type PopupDialogProps = {
};

export const PopupDialog: FC<PopupDialogProps> = ({ }) => {

    const [showPopup, setShowPopup] = useState<boolean>(true);
    const [popupContent, setPopupContent] = useState<any>(null);

    const sharedState = useSharedState();

    subscribeToSharedState('popup_window', (popup_window) => {
        if (popup_window) {
            setShowPopup(true);
            setPopupContent(popup_window.content);
        } else {
            setShowPopup(false);
            setPopupContent(null);
        }
    });

    const closePopup = () => {
        sharedState!.set('popup_window', null);
    };

    return <>
        
        {showPopup && 
            <Popup popupContent={popupContent} closePopup={closePopup} />}

    </>;
};
