import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    hasError?: boolean;
}

export const Input: FC<InputProps> = ({ label, hasError, ...rest }) => (
    <div className={styles.container}>
        {label}
        <input className={cx(styles.input, { [styles.hasError]: hasError })} {...rest} />
    </div>
);
