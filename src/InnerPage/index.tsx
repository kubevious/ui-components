import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface InnerPageProps {
    narrow?: boolean;
    midNarrow?: boolean;
    fullHeight?: boolean;
    header?: ReactNode;
    children?: ReactNode;
}

export const InnerPage: FC<InnerPageProps> = (
{ 
    narrow,
    midNarrow,
    fullHeight,
    header,
    children
}) => (
    <div data-testid="inner-page"
         className={cx(styles.innerPageContainer,
                        {
                            [styles.fullHeightPageContainer] : fullHeight,
                        })}>

        <div className={cx(styles.innerPageWrapper,
                            {
                                [styles.fullHeightPageWrapper] : fullHeight,
                                [styles.narrowContent] : (narrow),
                                [styles.midNarrowContent] : (midNarrow)
                            })}>

            <div className={cx(styles.innerPageHeader)}>
                {header}
            </div>

            <div className={cx(styles.innerPageContent)}>
                {children}
            </div>
        </div>
    </div>
);
