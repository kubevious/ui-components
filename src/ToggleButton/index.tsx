import _ from 'the-lodash';
import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import styles from './styles.module.css'

export interface ToggleButtonProps {
    isSelected?: boolean;
    onClick?: () => any;
    extraStyles?: string | string[] | { [key: string]: any };
    children?: ReactNode;
}

export const ToggleButton: FC<ToggleButtonProps> = ({ isSelected, onClick, extraStyles, children}) => {
   
    return <>
        <div
            className={cx(styles.button, { [styles.selected]: isSelected }, extraStyles)}
            onClick={() => {
                if (onClick) {
                    onClick()
                }
            }}
        >
            { children }
        </div>
    </>;
};