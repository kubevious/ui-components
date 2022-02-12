import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SideMenuItem } from './types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.css';
import cx from 'classnames';
import { GlobalClickHandler } from '.';

export interface SideMenuItemProps {
    item: SideMenuItem;

    isCollapsed?: boolean;
    isShowItem?: boolean;

    setShowItem: (value: string | null) => void;
    globalHandler?: GlobalClickHandler;
}

export const SideMenuItemComponent: FC<SideMenuItemProps> = ({
    item,
    isCollapsed,
    isShowItem,
    setShowItem,
    globalHandler
}) => {

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

    const handleClick = () => {
        if (globalHandler) {
            globalHandler(item);
        }

        if (item.onClick) {
            item.onClick();
        }
    }

    return <>
        {item.url ? (
            <NavLink
                className={cx(styles.itemBlock, {
                    [styles.hovered]: isShowItem,
                })}
                activeClassName={styles.selectedItem}
                onClick={handleClick}
                to={item.url}
                key={item.key}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
            >
                {item.icon ? (
                    <img src={`/img/menu/${item.icon}`} className={styles.menuItemIcon} />
                ) : (
                    <FontAwesomeIcon
                        icon={item.faIcon!}
                        className={styles.menuItemIcon}
                    />
                )}

                {(!isCollapsed || isShowItem) && (
                    <span className={cx('ms-4', styles.itemLink)}>{item.label}</span>
                )}
            </NavLink>
        ) : (
            <div
                className={cx(styles.itemBlock, {
                    [styles.hovered]: isShowItem,
                })}
                onClick={handleClick}
                key={item.key}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
            >
                {item.icon ? (
                    <img src={`/img/menu/${item.icon}`} className={styles.menuItemIcon} />
                ) : (
                    <FontAwesomeIcon
                        icon={item.faIcon!}
                        className={styles.menuItemIcon}
                    />
                )}
                {(!isCollapsed || isShowItem) && (
                    <span className={cx('ms-4', styles.itemLink)}>{item.label}</span>
                )}
            </div>
        )
        }
    </>
}