import React, { FC } from 'react';
import { PopupProps } from './types';

import styles from './styles.module.css';
import { ScrollbarComponent } from '../ScrollbarComponent';

export const Popup: FC<PopupProps> = ({ popupContent, closePopup }) => {
    return (
        <div data-testid="popup" id="popup" className={styles.popup}>
            <div className={styles.popupContents}>
                <ScrollbarComponent>
                {popupContent}
                </ScrollbarComponent>
            </div>
            <button className={styles.close}
                    onClick={closePopup} />
        </div>
    );
};
