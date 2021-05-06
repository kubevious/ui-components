import React, { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface ButtonProps {
    type?: 'success' | 'danger' | 'ghost' | 'dark';
    onClick?: () => any;
    htmlType?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({ type = 'success', children, onClick, htmlType = 'button', ...rest }) => (
    <button
        type={htmlType}
        onClick={onClick}
        className={cx('btn', styles[type], {
            'btn-success': type === 'success',
            'btn-dark': type === 'ghost',
        })}
        {...rest}
    >
        {children}
    </button>
);
