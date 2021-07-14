import React, { FC } from 'react';
import { Button, PageLink } from '..';
import { encodeURL } from '../utils/url';

export interface PageLinkButtonProps {
    path: string;
    searchParams?: Record<string, any>;
    type?: 'success' | 'danger' | 'ghost' | 'dark';
    spacingRight?: boolean;
    spacingLeft?: boolean;
    forceRedirect?: boolean;
}

export const PageLinkButton: FC<PageLinkButtonProps> = ({
    path,
    searchParams,
    type = 'success',
    spacingRight,
    spacingLeft,
    forceRedirect,
    children,
}) => {

    if (forceRedirect) {
        const executeForceRedirect = () => {
            const url = encodeURL(path, searchParams);
            window.location.assign(url);
        };

        return (
            <Button onClick={executeForceRedirect} type={type} spacingRight={spacingRight} spacingLeft={spacingLeft}>
                {children}
            </Button>
        );
    }

    return (
        <PageLink path={path} searchParams={searchParams}>
            <Button type={type} spacingRight={spacingRight} spacingLeft={spacingLeft}>
                {children}
            </Button>
        </PageLink>
    );
};
