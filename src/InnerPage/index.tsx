import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface InnerPageProps {
    narrow?: boolean;
    header?: ReactNode;
}

export const InnerPage: FC<InnerPageProps> = ({ narrow, header, children }) => (
    <div className={cx('row', styles.container, { 'justify-content-center': narrow })}>
        <div className={cx(narrow ? styles.narrowContainer : 'col-12', 'text-white mh-100')}>
            {header}

            {children}
        </div>
    </div>
);
