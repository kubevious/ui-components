import _ from 'the-lodash';
import React, { FC, ReactNode, useState } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';
import { subscribeToSharedState, useSharedState } from '@kubevious/ui-framework';
import { SideMenuItem, SideMenuSection } from './types';

import { SideMenuItemComponent } from './SideMenuItem';
import { ScrollbarComponent } from '../ScrollbarComponent';

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
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const sharedState = useSharedState();

    subscribeToSharedState("is_loading", (is_loading) => {
        setIsLoading(is_loading ? true : false);
    })

    let footerItems : SideMenuItem[] = [];
    if (footer) {
        footerItems = _.concat(footerItems, footer);
    }
    footerItems.push({
        key: 'close',
        label: isCollapsed ? 'Expand' : 'Collapse',
        icon: isCollapsed ? 'open.svg' : 'close.svg',
        onClick: () => {
            if (isCollapsed) {
                sharedState?.set('is_side_menu_collapsed', false);
            } else {
                sharedState?.set('is_side_menu_collapsed', true);
            }
        },
    });

    return (
        <aside className={cx(styles.container, { [styles.containerCollapsed]: isCollapsed })}>
            <div className={styles.content}>
                <div className={styles.contentTop}>
                    <div className={styles.header}>
                        {!isCollapsed && header}
                        {isCollapsed && collapsedHeader}
                    </div>

                    <div className={cx(styles.bar, { [styles.barLoading]: isLoading })} />
                </div>

                <div className={styles.contentWrapper}>
                    <ScrollbarComponent>

                        <div className={styles.contentItems}>
                            <div className={styles.mainSections}>
                                {getVisibleSections(sections).map((section, index) => (
                                    <div key={index}
                                            className={styles.sectionWrapper}
                                            >
                                        {!isCollapsed && <div className={styles.sectionLabel}>{section.name}</div>}

                                        <div className={styles.menuItemList}
                                        >
                                            {getVisibleItems(section).map((item, index) =>
                                                <SideMenuItemComponent
                                                    key={index}
                                                    item={item}
                                                    isCollapsed={isCollapsed}
                                                    globalHandler={globalHandler}
                                                    />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={cx(styles.footerSection, styles.menuItemList, styles.sectionWrapper)}>
                                {footerItems.map((item, index) => 
                                    <SideMenuItemComponent
                                        key={index}
                                        item={item}
                                        isCollapsed={isCollapsed}
                                        globalHandler={globalHandler}
                                        />
                                )}
                            </div>
                        </div>

                    </ScrollbarComponent>
                </div>

            </div>
        </aside>
    );
};

function getVisibleSections(sections: SideMenuSection[])
{
    return sections.filter(x => {
        if (!x.condition) {
            return true;
        }
        return x.condition();
    });
}

function getVisibleItems(section: SideMenuSection)
{
    return section.items.filter(x => {
        if (!x.condition) {
            return true;
        }
        return x.condition();
    });
}