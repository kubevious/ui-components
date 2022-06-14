import React, { FC, ReactNode } from 'react';

import styles from './styles.module.css';

export interface AdditionalBlockProps {
    title?: ReactNode;
    text?: ReactNode;
    action?: ReactNode;
    footer?: ReactNode;
}

export const AdditionalBlock: FC<AdditionalBlockProps> = ({ title, text, action, footer, children }) => (
    <div className={styles.additionalBlock}>
        {title && <div className={styles.additionalTitle}>{title}</div>}
        {text && <div className={styles.additionalText}>{text}</div>}

        {action && <div>{action}</div>}

        {children}

        {footer && <div className={styles.footerText}>{footer}</div>}
    </div>
);
