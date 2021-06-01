import React, { FC, useEffect } from 'react';

export interface HookComponentProps
{
    setup: () => void;
    cleanup: () => void;
}

export const HookComponent: FC<HookComponentProps> = ({ setup, cleanup }) => {
    
    useEffect(() => {
        setup();

        return cleanup;
    }, [])
    
    return <> </>
};
