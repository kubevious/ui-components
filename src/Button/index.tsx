import React, { ButtonHTMLAttributes, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type?: 'success' | 'danger' | 'ghost' | 'dark';
    htmlType?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({ type = 'success', children, htmlType = 'button', ...rest }) => (
    <button
        type={htmlType}
        className={cx(rest.className, 'btn', styles[type], {
            'btn-success': type === 'success',
            'btn-dark': type === 'ghost',
        })}
        {...rest}
    >
        {children}
    </button>
);
