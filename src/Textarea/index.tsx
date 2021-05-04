import React, { FC, ReactNode, TextareaHTMLAttributes } from 'react';

import styles from './styles.module.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: ReactNode;
}

export const Textarea: FC<TextareaProps> = ({ label, ...rest }) => (
    <div className={styles.container}>
        {label}
        <textarea className={styles.textarea} {...rest} />
    </div>
);
