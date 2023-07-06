import React, { ReactNode } from 'react';
import { FC } from 'react';

export interface TabProps {
    label: string;
    children?: ReactNode;
}

export const Tab: FC<TabProps> = ({ children, label }) => {
    return <div className={`tab-content tab-content-${label}`}>{children}</div>;
};
