import React, { FC, useState } from 'react';
import { useSharedState } from '@kubevious/ui-framework';
import { ConfirmationDialogParams, CONFIRMATION_DIALOG_PARAMS_SHARED_KEY } from './types';
import { ConfirmationDialogComponent } from './component';

export const ConfirmationDialog: FC<{ }> = ({ }) => {

    const [params, setParams] = useState<ConfirmationDialogParams | null>(null);

    const sharedState = useSharedState((sharedState) => {
        sharedState.subscribe(CONFIRMATION_DIALOG_PARAMS_SHARED_KEY,
            (value) => {
                setParams(value)
            });
    })

    const onCancel = () => {
        sharedState!.set(CONFIRMATION_DIALOG_PARAMS_SHARED_KEY, null);
    }

    const onConfirm = () => {
        sharedState!.set(CONFIRMATION_DIALOG_PARAMS_SHARED_KEY, null);
        params!.action();
    }

    return <>
        { params &&
            <ConfirmationDialogComponent params={params!}
                onCancel={onCancel}
                onConfirm={onConfirm}
                />
        }
    </>

};