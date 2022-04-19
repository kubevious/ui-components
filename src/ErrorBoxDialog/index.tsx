import React, { FC, useState } from 'react';
import { subscribeToSharedState, useSharedState } from '@kubevious/ui-framework';

import { ErrorBox } from '../ErrorBox';

export interface ErrorBoxDialogProps {
}


export const ErrorBoxDialog: FC<ErrorBoxDialogProps> = () => {
    const [error, setError] = useState<Error | null>(null);
    const [isError, setIsError] = useState<boolean>(true);

    const sharedState = useSharedState();

    subscribeToSharedState(['is_error', 'error'], ({ is_error, error }: { is_error: boolean; error: Error | null }) => {
        setIsError(is_error);
        setError(error);

        console.log("[MainTemplate] ERROR: ", error);
        if (error) {
            console.log("[MainTemplate] ERROR toString: ", error.toString());
        }
    });
    
    const closeError = (): void => {
        sharedState!.set('is_error', false);
        sharedState!.set('error', null);
    };

    return <>
        {isError && error && 
            <ErrorBox error={error}
                        closeError={closeError}
                        details={getErrorDetails(error)}
                        refreshRequest={needsRefreshToRecover(error)}
                        />
        }

    </>;
};


function getErrorDetails(reason: any)
{
    const error = reason as HttpClientError;

    const details : { name: string, value: string }[] = [];
    if (error.httpUrl) {
        details.push({ name: 'URL', value: error.httpUrl });
    }
    if (error.httpMethod) {
        details.push({ name: 'Method', value: error.httpMethod });
    }
    if (error.httpParams) {
        details.push({ name: 'Params', value: JSON.stringify(error.httpParams) });
    }
    if (error.httpStatusCode) {
        details.push({ name: 'Status Code', value: error.httpStatusCode.toString() });
    }
    if (error.httpStatusText) {
        details.push({ name: 'Status', value: error.httpStatusText });
    }
    return details;
}

function needsRefreshToRecover(reason: any)
{
    const error = reason as HttpClientError;

    const statusCode = error?.httpStatusCode;
    if (statusCode) {
        if ((statusCode >= 500) && (statusCode < 600)) {
            return true;
        }
    }
    
    return false;
}

interface HttpClientError extends Error {
    httpUrl: string;
    httpMethod: string;
    httpParams: Record<string, string>;
    httpStatusCode?: number;
    httpStatusText?: string;
}