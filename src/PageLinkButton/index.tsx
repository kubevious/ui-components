import React, { FC } from 'react';
import { Button, PageLink } from '..';
import { ButtonProps } from '../Button';
import { LinkProps } from '../PageLink/types';

export interface PageLinkButtonProps {
    linkProps: LinkProps;
    buttonProps: ButtonProps;
}

export const PageLinkButton: FC<PageLinkButtonProps> = ({ linkProps, buttonProps }) => (
    <PageLink {...linkProps}>
        <Button {...buttonProps} />
    </PageLink>
);
