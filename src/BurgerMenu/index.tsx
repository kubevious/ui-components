import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import { BurgerMenuProps } from './types';
import cx from 'classnames';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';

export const BurgerMenu: FC<BurgerMenuProps> = ({ items }) => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

    return (
        <div
            data-testid="burger-menu"
            className={styles.burgerMenuContainer}
            onMouseEnter={() => setIsMenuVisible(true)}
            onMouseLeave={() => setIsMenuVisible(false)}
        >
            <div className={cx(styles.buttonWrapper, isMenuVisible && styles.hovered)}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className={cx(styles.menu, !isMenuVisible && styles.hidden)}>
                <a id="exportAnchor" style={{ display: 'none' }} />

                {items.map((menuItem, index) =>
                    menuItem.isUploadFile ? (
                        <div className={styles.menuItem} key={index}>
                            <input type="file" id={`upload`} name={`upload`} onChange={menuItem.action} hidden />
                            <label htmlFor={`upload-${index}`} onClick={menuItem.action}>
                                <div className={styles.icon}>
                                    <FontAwesomeIcon icon={menuItem.icon} />
                                </div>
                                {menuItem.text}
                            </label>
                        </div>
                    ) : (
                        <div className={styles.menuItem} onClick={menuItem.action} key={index}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={menuItem.icon} />
                            </div>
                            {menuItem.text}
                        </div>
                    ),
                )}
            </div>
        </div>
    );
};
