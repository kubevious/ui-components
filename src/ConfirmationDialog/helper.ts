import { app } from '@kubevious/ui-framework';
import { ConfirmationDialogParams, CONFIRMATION_DIALOG_PARAMS_SHARED_KEY } from './types';

export const openConfirmationDialog = (params: ConfirmationDialogParams) => {
    app.sharedState.set(CONFIRMATION_DIALOG_PARAMS_SHARED_KEY, params);
};
