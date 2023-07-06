import React, { FC, ReactNode } from 'react';
import styles from './styles.module.css';
import { Label } from '../Label'

export interface SectionBlockProps {
    title: ReactNode,
    children?: ReactNode,
}

export const SectionBlock: FC<SectionBlockProps> = ({ title, children }) => (
    <div className={styles.section}>
        <Label className={styles.title}
               size="xlarge"
               color="faded"
                >
            {title}
        </Label> 
        { children }
    </div>
);
