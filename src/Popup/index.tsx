import React, { FC } from 'react';
import { PopupProps } from './types';

import './styles.scss';

export const Popup: FC<PopupProps> = ({ popupContent, closePopup }) => {
    return (
        <div data-testid="popup" id="popup" className="popup">
            <div className="popup-contents">{popupContent}</div>
            <button className="close" onClick={closePopup} />
        </div>
    );
};
