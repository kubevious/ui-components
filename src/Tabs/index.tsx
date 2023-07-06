import cx from 'classnames';
import React, { FC, ReactElement, useEffect, useState } from 'react';

import styles from './styles.module.css';

export interface TabsProps {
    children?: ReactElement[];
}

export const Tabs: FC<TabsProps> = ({ children }) => {

    const myChildren = children ?? [];

    const [currentTab, setCurrentTab] = useState(myChildren[0].props.label);

    useEffect(() => {
        setCurrentTab(myChildren[0].props.label);
    }, [myChildren]);

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.header}>
                {myChildren.map((item) => {
                    return (
                        <div
                            key={item.key}
                            className={cx(styles.tab, {
                                [styles.selectedTab]:
                                    currentTab === item.props.label && myChildren.length > 1,
                                [styles.singleTab]: myChildren.length === 1,
                            })}
                            onClick={() => setCurrentTab(item.props.label)}
                        >
                            {item.props.label}
                        </div>
                    );
                })}
            </div>

            <div className={styles.tabWrapper}>
                {myChildren.map((child) => {
                    if (child.props.label !== currentTab) return null;
                    return child.props.children;
                })}
            </div>
        </div>
    );
};
