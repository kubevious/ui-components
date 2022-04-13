import React, { FC, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SideMenuItem } from '../types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.css';
import cx from 'classnames';
import { GlobalClickHandler } from '../';
import { Overlay } from 'react-bootstrap';

export interface SideMenuItemComponentProps {
    item: SideMenuItem;

    isCollapsed?: boolean;
    isSelected?: boolean;
    globalHandler?: GlobalClickHandler;
}

export const SideMenuItemComponent: FC<SideMenuItemComponentProps> = ({
    item,
    isCollapsed,
    globalHandler
}) => {

    const targetRef = useRef(null);
    
    const [isHover, setIsHover] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const handleClick = () => {
        if (globalHandler) {
            globalHandler(item);
        }

        if (item.onClick) {
            item.onClick();
        }
    }

    const renderMenuContents = () => {
        return <div ref={targetRef}
                className={cx(styles.itemBlock, {
                    // [styles.isActiveItem]: isSelected, // USE activeClassName
                    [styles.isCollapsedActiveItem]: isHover && isCollapsed,
                })}
                >
            {item.icon ? (
                <img src={`/img/menu/${item.icon}`} className={styles.menuItemIcon} />
            ) : (
                <FontAwesomeIcon
                    icon={item.faIcon!}
                    className={styles.menuItemIcon}
                />
            )}

            { (!isCollapsed) && 
                <span className={cx(styles.itemLabel, styles.itemLabelNonCollapsed)}>
                    {item.label}
                </span>
            }
        </div>;
    }

    const renderMenuItem = () => {

        return (
            <>
                {renderMenuContents()}

                {isCollapsed && 
                    <Overlay target={targetRef.current}
                             show={isHover} 
                             placement="right"
                             transition={false}
                             >
                        {({ placement, arrowProps, show: _show, popper, ...props }) => (
                        <div
                            {...props}
                            className={cx(styles.isActiveItem, styles.tooltipItem, styles.itemLabel )}
                            style={{

                                ...props.style,
                            }}
                        >
                            {item.label}
                        </div>
                        )}
                    </Overlay>
                }

            </>
        );
    }

    return <>
        {item.url ? (
            <NavLink
                className={styles.link}
                onClick={handleClick}
                to={item.url}
                activeClassName={styles.isActiveItem}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {renderMenuItem()}
                
            </NavLink>
        ) : (
            <div
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {renderMenuItem()}
            </div>
        )
        }
    </>
}