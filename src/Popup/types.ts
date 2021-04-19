import { ReactNode } from 'react';

export type PopupProps = {
    popupContent?: ReactNode;
    closePopup: () => void;
};
