import React, { FC, useEffect } from 'react';

export interface CallbackHookProps
{
    setup: () => void;
    cleanup: () => void;
}

export const CallbackHook: FC<CallbackHookProps> = ({ setup, cleanup }) => {
    
    useEffect(() => {
        setup();

        return cleanup;
    }, [])
    
    return <> </>
};
