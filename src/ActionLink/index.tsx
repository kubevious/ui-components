import _ from 'the-lodash';
import React, { FC, MouseEventHandler } from 'react';
import cx from 'classnames';

import { TextSize, TextColor } from '../common-styles/text-types';

import sizeStyles from '../common-styles/text-size-styles.module.css';
import colorStyles from '../common-styles/text-color-styles.module.css';

export interface ActionLinkProps {
    textSize?: TextSize;
    textColor?: TextColor;
    onClick?: MouseEventHandler<any> | undefined;
    extraStyles?: string | string[] | { [key: string]: any };
}

export const ActionLink: FC<ActionLinkProps> = ({ textSize, textColor, children, onClick, extraStyles }) => {
   
    const styleMap : { [key: string]: any } = {};

    textSize = textSize || 'normal';
    styleMap[sizeStyles[textSize]] = true;

    textColor = textColor || 'link';
    // styleMap[colorStyles[textColor]] = true;
    styleMap[colorStyles[textColor + '-link']] = true;

    return (
        <a className={cx(styleMap, extraStyles)} 
           onClick={onClick}
           >
            {children}
        </a>
    );
};