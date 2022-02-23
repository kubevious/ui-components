import React, { FC, HTMLAttributeAnchorTarget } from 'react';
import { Button } from '../Button';
import { PageLink } from '../PageLink';
import { encodeURL } from '../utils/url';

export interface PageLinkButtonProps {
    path: string;
    searchParams?: Record<string, any>;
    type?: 'success' | 'danger' | 'ghost' | 'dark';
    spacingRight?: boolean;
    spacingLeft?: boolean;
    forceRedirect?: boolean;
    handlePreClick?: () => void;
    target?: HTMLAttributeAnchorTarget;
}

export const PageLinkButton: FC<PageLinkButtonProps> = ({
    path,
    searchParams,
    type = 'success',
    spacingRight,
    spacingLeft,
    forceRedirect,
    handlePreClick,
    children,
    target
}) => {

    if (forceRedirect) {
        const executeForceRedirect = () => {
            const url = encodeURL(path, searchParams);
            window.location.assign(url);
        };

        return (
            <Button onClick={executeForceRedirect}
                    handlePreClick={handlePreClick}
                    type={type}
                    spacingRight={spacingRight}
                    spacingLeft={spacingLeft}>
                {children}
            </Button>
        );
    }

    return (
        <PageLink path={path}
                  handlePreClick={handlePreClick}
                  searchParams={searchParams}
                  target={target}
                  >
            <Button type={type}
                    spacingRight={spacingRight}
                    spacingLeft={spacingLeft}>
                {children}
            </Button>
        </PageLink>
    );
};
