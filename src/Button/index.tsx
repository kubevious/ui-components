import React, { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react';
import cx from 'classnames';

import { ConfirmationDialogOptions, ConfirmationDialogParams } from '../ConfirmationDialog/types';

import styles from './styles.module.css';
import { openConfirmationDialog } from '../ConfirmationDialog/helper';

export type ButtonType = 'success' | 'danger' | 'ghost' | 'dark';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type?: ButtonType;
    htmlType?: 'button' | 'submit' | 'reset';
    spacingRight?: boolean;
    spacingLeft?: boolean;
    bordered?: boolean;
    confirmation?: ConfirmationDialogOptions;
    onClick?: MouseEventHandler;
    filled?: boolean
}

export const Button: FC<ButtonProps> = ({
    type = 'success',
    children,
    htmlType = 'button',
    spacingRight,
    spacingLeft,
    bordered = true,
    confirmation,
    filled = false,
    ...rest
}) => {
    const origOnClick = rest.onClick;

    const { onClick, ...filteredProps } = rest;

    const buttonOnClick: MouseEventHandler = (e) => {
        if (confirmation) {
            const confirmationParams: ConfirmationDialogParams = {
                action: () => {
                    if (origOnClick) {
                        origOnClick(e);
                    }
                },
                ...confirmation!,
            };
            openConfirmationDialog(confirmationParams);
        } else {
            if (origOnClick) {
                origOnClick(e);
            }
        }
    };

    return (
        <button
            onClick={buttonOnClick}
            type={htmlType}
            {...filteredProps}
            className={cx(
                'btn',
                styles[type],
                {
                    'btn-success': type === 'success',
                    'btn-dark': type === 'ghost',
                    [styles.spacingRight]: spacingRight,
                    [styles.spacingLeft]: spacingLeft,
                    [styles.bordered]: bordered,
                    [styles.filled]: filled
                },
                filteredProps.className,
            )}
        >
            {children}
        </button>
    );
};
