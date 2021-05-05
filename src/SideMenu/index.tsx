import React, { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export interface SideMenuItem {
    key: string;
    label: string;
    icon: string;
    selected: boolean;
}

export interface SideMenuSection {
    name: string;
    items: SideMenuItem[];
}

export interface SideMenuFooterItem {
    key: string;
    label: string;
    icon: string;
    onClick: () => void;
}

export interface SideMenuProps {
    sections: SideMenuSection[];
    footer?: SideMenuFooterItem[];
}

export const SideMenu: FC<SideMenuProps> = ({ sections, footer }) => (
    <aside className={styles.container}>
        <div style={{ height: '100%' }} className="d-flex flex-column justify-content-between">
            <div>
                <div className={styles.header}>
                    <img src="/img/logoBig.svg" />
                </div>

                <div>
                    {sections.map((section) => (
                        <div>
                            <div className={styles.sectionLabel}>{section.name}</div>

                            <div>
                                {section.items.map((item) => (
                                    <div className={cx(styles.itemBlock, { [styles.selectedItem]: item.selected })}>
                                        <img src={item.icon} />
                                        <div className="ms-4">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {footer && (
                <div className={styles.footer}>
                    {footer.map((item) => (
                        <div className={styles.itemBlock} onClick={item.onClick}>
                            <img src={item.icon} />
                            <div className="ms-4">{item.label}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </aside>
);
