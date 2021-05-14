import React, { FC } from 'react';
import { Button, PageLink } from '..';

export interface PageLinkButtonProps {
    path: string;
    searchParams?: Record<string, any>;
    type?: 'success' | 'danger' | 'ghost' | 'dark';
    spacingRight?: boolean;
    spacingLeft?: boolean;
}

export const PageLinkButton: FC<PageLinkButtonProps> = ({
    path,
    searchParams,
    type = 'success',
    spacingRight,
    spacingLeft,
    children,
}) => (
    <PageLink path={path} searchParams={searchParams}>
        <Button type={type} spacingRight={spacingRight} spacingLeft={spacingLeft}>
            {children}
        </Button>
    </PageLink>
);
