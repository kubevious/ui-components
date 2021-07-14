import React, { FC } from 'react';
import cx from 'classnames';

import { TextSize } from '../common-styles/text-types';

import sizeStyles from '../common-styles/text-size-styles.module.css';
import colorStyles from '../common-styles/text-color-styles.module.css';

export interface LabelProps {
    text?: string;
    size?: TextSize,
    faded?: boolean
}

export const Label: FC<LabelProps> = ({ text, size, faded }) => {

    const sizeStyle = size ? size : 'normal';
    const colorStyle = faded ? 'faded' : 'normal';

    return <>
        <div className={cx(colorStyles[colorStyle], sizeStyles[sizeStyle])}>
            {text}
        </div>
    </>
};
