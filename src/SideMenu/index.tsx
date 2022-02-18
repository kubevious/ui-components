import React, { FC, ReactNode, useState } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';
import { subscribeToSharedState } from '@kubevious/ui-framework/dist';
import { SideMenuItem, SideMenuSection } from './types';

import { SideMenuItemComponent } from './menu-item';

export type GlobalClickHandler = (item: SideMenuItem) => any;

export interface SideMenuProps {
    header: ReactNode;
    collapsedHeader: ReactNode;
    sections: SideMenuSection[];
    footer?: SideMenuItem[];
    isCollapsed?: boolean;
    globalHandler?: GlobalClickHandler;
}

export const SideMenu: FC<SideMenuProps> = ({ 
    header, 
    collapsedHeader,
    sections,
    footer,
    isCollapsed,
    globalHandler
}) => {
    const [showItem, setShowItem] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    subscribeToSharedState("is_loading", (is_loading) => {
        setIsLoading(is_loading ? true : false);
    })

    return (
        <aside className={cx(styles.container, { [styles.collapsed]: isCollapsed })}>
            <div className={styles.content}>
                <div>
                    <div className={styles.header}>
                        {!isCollapsed && header}
                        {isCollapsed && collapsedHeader}
                    </div>

                    <div className={cx(styles.bar, { [styles.barLoading]: isLoading })} />

                    <div style={{ marginTop: isCollapsed ? '30px' : 0 }}>
                        {sections.map((section, index) => (
                            <div key={index}>
                                {!isCollapsed && <div className={styles.sectionLabel}>{section.name}</div>}

                                <div>
                                    {section.items.map((item) =>
                                        <SideMenuItemComponent
                                            key={item.key}
                                            item={item}
                                            isShowItem={showItem === item.key}
                                            isCollapsed={isCollapsed}
                                            setShowItem={setShowItem}
                                            globalHandler={globalHandler}
                                            />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {footer && (
                    <div className={styles.footer}>
                        {footer.map((item) => 
                            <SideMenuItemComponent
                                key={item.key}
                                item={item}
                                isShowItem={showItem === item.key}
                                isCollapsed={isCollapsed}
                                setShowItem={setShowItem}
                                globalHandler={globalHandler}
                                />
                        )}
                    </div>
                )}
            </div>
        </aside>
    );
};
