import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import styles from './styles.module.css';

export type SideMenuItem =
    | {
          key: string;
          label: string;
          icon?: string;
          faIcon?: IconProp;
          url: string;
          onClick?: never;
      }
    | {
          key: string;
          label: string;
          icon?: string;
          faIcon?: IconProp;
          url?: never;
          onClick: () => any;
      };

export interface SideMenuSection {
    name: string;
    items: SideMenuItem[];
}

export interface SideMenuFooterItem {
    key: string;
    label: string;
    icon?: string;
    faIcon?: IconProp;
    onClick: () => void;
}

export interface SideMenuProps {
    sections: SideMenuSection[];
    footer?: SideMenuFooterItem[];
    isCollapsed: boolean;
}

export const SideMenu: FC<SideMenuProps> = ({ sections, footer, isCollapsed }) => {
    const [showItem, setShowItem] = useState<string | null>(null);

    const handleMouseEnter = (item: SideMenuItem) => {
        if (!isCollapsed) {
            return;
        }

        setShowItem(item.key);
    };

    const handleMouseLeave = () => {
        if (!isCollapsed) {
            return;
        }

        setShowItem(null);
    };

    return (
        <aside className={cx(styles.container, { [styles.collapsed]: isCollapsed })}>
            <div style={{ height: '100%' }} className="d-flex flex-column justify-content-between">
                <div>
                    <div className={styles.header}>
                        {!isCollapsed && <span className={styles.beta}>BETA</span>}
                        {isCollapsed ? <img src="/img/logoSmall.svg" /> : <img src="/img/logoBig.svg" />}
                    </div>

                    <div className={cx(styles.bar, { [styles.barLoading]: true })} />

                    <div style={{ marginTop: isCollapsed ? '30px' : 0 }}>
                        {sections.map((section, index) => (
                            <div key={index}>
                                {!isCollapsed && <div className={styles.sectionLabel}>{section.name}</div>}

                                <div>
                                    {section.items.map((item) =>
                                        item.url ? (
                                            <NavLink
                                                className={cx(styles.itemBlock, {
                                                    [styles.hovered]: showItem === item.key,
                                                })}
                                                activeClassName={styles.selectedItem}
                                                to={item.url}
                                                key={item.key}
                                                onMouseEnter={() => handleMouseEnter(item)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                {item.icon ? (
                                                    <img src={`/img/menu/${item.icon}`} />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        icon={item.faIcon!}
                                                        style={{
                                                            width: '24px',
                                                            height: '24px',
                                                        }}
                                                    />
                                                )}

                                                {(!isCollapsed || showItem === item.key) && (
                                                    <span className={cx('ms-4', styles.itemLink)}>{item.label}</span>
                                                )}
                                            </NavLink>
                                        ) : (
                                            <div
                                                className={cx(styles.itemBlock, {
                                                    [styles.hovered]: showItem === item.key,
                                                })}
                                                onClick={item.onClick}
                                                key={item.key}
                                                onMouseEnter={() => handleMouseEnter(item)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                {item.icon ? (
                                                    <img src={`/img/menu/${item.icon}`} />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        icon={item.faIcon!}
                                                        style={{
                                                            width: '24px',
                                                            height: '24px',
                                                        }}
                                                    />
                                                )}
                                                {(!isCollapsed || showItem === item.key) && (
                                                    <span className={cx('ms-4', styles.itemLink)}>{item.label}</span>
                                                )}
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {footer && (
                    <div className={styles.footer}>
                        {footer.map((item) => (
                            <div
                                className={cx(styles.itemBlock, {
                                    [styles.hovered]: showItem === item.key,
                                })}
                                onClick={item.onClick}
                                key={item.key}
                                onMouseEnter={() => handleMouseEnter(item)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.icon ? (
                                    <img src={`/img/menu/${item.icon}`} />
                                ) : (
                                    <FontAwesomeIcon icon={item.faIcon!} style={{ width: '24px', height: '24px' }} />
                                )}
                                {(!isCollapsed || showItem === item.key) && <div className="ms-4">{item.label}</div>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
};
