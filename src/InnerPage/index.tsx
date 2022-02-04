import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface InnerPageProps {
    narrow?: boolean;
    midNarrow?: boolean;
    header?: ReactNode;
}

export const InnerPage: FC<InnerPageProps> = ({ narrow, midNarrow, header, children }) => (
    <div className={cx(styles.container, 
                       { 
                           [styles.narrowContainer]: (narrow || midNarrow)
                       })}>
        <div className={cx(styles.innerContent,
                           'text-white',
                           'mh-100',
                           {
                               [styles.narrowContent] : (narrow),
                               [styles.midNarrowContent] : (midNarrow)
                           })}>
            {header}

            {children}
        </div>
    </div>
);
