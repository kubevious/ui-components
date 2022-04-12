import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';
import { Label } from '../Label';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    hasError?: boolean;
    rightIcon?: ReactNode;
    containerClassName?: string;

    ref?: any;
}

export const Input: FC<InputProps> = ({ label, hasError, rightIcon, containerClassName, ref, ...rest }) => (
    <div className={cx(styles.container, containerClassName )}>
        {label && <Label text={label} >
            </Label>}
        <div className={styles.inputContainer}>
            <input className={cx(styles.input, { [styles.hasError]: hasError })}
                   ref={ref}
                   {...rest} />
            {rightIcon && <div className={styles.iconContainer}>
                {rightIcon}
            </div>}
        </div>
    </div>
);
