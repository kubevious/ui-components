import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './styles.module.css';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    checked?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({ label, checked, ...rest }) => {
    const checkboxId = uuidv4();

    return (
        <div className="d-flex align-items-center">
            <label htmlFor={checkboxId} className={styles.wrapper}>
                <span className={styles.checkbox}>
                    <input type="checkbox" id={checkboxId} className={styles.inputCheckbox} {...rest} />

                    {checked && <div className={styles.checkmark} />}
                </span>

                <span className={styles.label}>{label}</span>
            </label>
        </div>
    );
};
