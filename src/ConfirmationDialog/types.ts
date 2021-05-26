import { ReactNode } from 'react';
import { ButtonType } from '../Button';

export interface ConfirmationDialogOptions {
    title?: ReactNode,  
    message?: ReactNode,  
    cancelLabel?: string,  
    confirmLabel?: string,  
    confirmButtonType?: ButtonType
}

export type ConfirmationDialogParams = ConfirmationDialogOptions & {
    action: () => void
}

export interface ConfirmationDialogComponentProps
{
    params: ConfirmationDialogParams,
    onCancel: () => void
    onConfirm: () => void
}

export const CONFIRMATION_DIALOG_PARAMS_SHARED_KEY = "confirmation_dialog_params";