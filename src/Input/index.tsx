import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    hasError?: boolean;
    rightIcon?: ReactNode;
}

export const Input: FC<InputProps> = ({ label, hasError, rightIcon, ...rest }) => (
    <div className={styles.container}>
        {label}
        <input className={cx(styles.input, { [styles.hasError]: hasError })} {...rest} />
        {rightIcon}
    </div>
);
