import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface InnerPageProps {
    narrow?: boolean;
    header?: ReactNode;
}

export const InnerPage: FC<InnerPageProps> = ({ narrow, header, children }) => (
    <div className={cx('row', styles.container)}>
        <div className={cx(narrow ? 'col-6 offset-3' : 'col-12', 'text-white mh-100')}>
            {header}

            {children}
        </div>
    </div>
);
