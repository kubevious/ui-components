import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';
import { Label } from '../Label';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    hasError?: boolean;
    rightIcon?: ReactNode;
}

export const Input: FC<InputProps> = ({ label, hasError, rightIcon, ...rest }) => (
    <div className={styles.container}>
        {label && <Label text={label} >
            </Label>}
        <div className={styles.inputContainer}>
            <input className={cx(styles.input, { [styles.hasError]: hasError })} {...rest} />
            {rightIcon && <div className={styles.iconContainer}>
                {rightIcon}
            </div>}
        </div>
    </div>
);
