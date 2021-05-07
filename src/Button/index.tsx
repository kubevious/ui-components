import React, { CSSProperties, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface ButtonProps {
    type?: 'success' | 'danger' | 'ghost' | 'dark';
    onClick?: () => any;
    htmlType?: 'button' | 'submit' | 'reset';
    className?: string;
    style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({
    type = 'success',
    children,
    onClick,
    htmlType = 'button',
    className,
    style,
    ...rest
}) => (
    <button
        type={htmlType}
        onClick={onClick}
        className={cx('btn', className, styles[type], {
            'btn-success': type === 'success',
            'btn-dark': type === 'ghost',
        })}
        style={style}
        {...rest}
    >
        {children}
    </button>
);
