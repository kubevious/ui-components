import React, { FC } from 'react';
import cx from 'classnames';

import { TextColor, TextSize } from '../common-styles/text-types';

import sizeStyles from '../common-styles/text-size-styles.module.css';
import colorStyles from '../common-styles/text-color-styles.module.css';

export interface LabelProps {
    text?: string;
    size?: TextSize;
    color?: TextColor;
    extraStyles?: string | string[] | { [key: string]: any };
}

export const Label: FC<LabelProps> = ({ text, size, color, extraStyles, children }) => {

    const sizeStyle = size ? size : 'normal';
    const colorStyle = color ? color : 'normal';

    return <>
        <div className={cx(colorStyles[colorStyle], sizeStyles[sizeStyle], extraStyles)}>
            {text}
            {children}
        </div>
    </>
};
