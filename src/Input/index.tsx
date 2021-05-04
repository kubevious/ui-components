import React, { FC, InputHTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
}

export const Input: FC<InputProps> = ({ label, ...rest }) => (
    <div className={styles.container}>
        {label}
        <input className={styles.input} {...rest} />
    </div>
);
