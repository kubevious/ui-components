import _ from 'the-lodash';
import React, { FC, MouseEventHandler, ReactNode } from 'react';
import cx from 'classnames';

import { TextSize, TextColor } from '../common-styles/text-types';

import sizeStyles from '../common-styles/text-size-styles.module.css';
import colorStyles from '../common-styles/text-color-styles.module.css';

export interface ActionLinkProps {
    textSize?: TextSize;
    textColor?: TextColor;
    onClick?: MouseEventHandler<any> | undefined;
    handlePreClick?: () => void;
    extraStyles?: string | string[] | { [key: string]: any };
    children?: ReactNode;
}

export const ActionLink: FC<ActionLinkProps> = ({
    textSize,
    textColor,
    children,
    onClick,
    handlePreClick,
    extraStyles
}) => {
   
    const styleMap : { [key: string]: any } = {};

    textSize = textSize || 'normal';
    styleMap[sizeStyles[textSize]] = true;

    textColor = textColor || 'link';
    // styleMap[colorStyles[textColor]] = true;
    styleMap[colorStyles[textColor + '-link']] = true;

    const handleClick : MouseEventHandler = (e) => {
        if (handlePreClick) {
            handlePreClick();
        }
        if (onClick) {
            onClick(e);
        }
    } 

    return (
        <a className={cx(styleMap, extraStyles)} 
           onClick={handleClick}
           >
            {children}
        </a>
    );
};