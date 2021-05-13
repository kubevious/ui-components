import React, { ButtonHTMLAttributes, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type?: 'success' | 'danger' | 'ghost' | 'dark';
    htmlType?: 'button' | 'submit' | 'reset';
    spacingRight?: boolean;
    spacingLeft?: boolean;
}

export const Button: FC<ButtonProps> = ({
    type = 'success',
    children,
    htmlType = 'button',
    spacingRight,
    spacingLeft,
    ...rest
}) => (
    <button
        type={htmlType}
        {...rest}
        className={cx(
            'btn',
            styles[type],
            {
                'btn-success': type === 'success',
                'btn-dark': type === 'ghost',
                [styles.spacingRight]: spacingRight,
                [styles.spacingLeft]: spacingLeft,
            },
            rest.className,
        )}
    >
        {children}
    </button>
);
