import React, { FC, ReactNode, TextareaHTMLAttributes } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: ReactNode;
    hasError?: boolean;
}

export const Textarea: FC<TextareaProps> = ({ label, hasError, ...rest }) => (
    <div className={styles.container}>
        {label}
        <textarea className={cx(styles.textarea, { [styles.hasError]: hasError })} {...rest} />
    </div>
);
