import React, { FC } from 'react';

import styles from './styles.module.css'

export interface PageHeaderProps {
    title: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, children }) => (
    <div className="d-flex justify-content-between align-items-center">
        <div className={styles.title}>{title}</div>

        <div>{children}</div>
    </div>
);
