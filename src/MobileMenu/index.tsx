import _ from 'the-lodash';
import React, { FC, ReactNode, useState } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';
import { subscribeToSharedState } from '@kubevious/ui-framework';
import { SideMenuItem, SideMenuSection } from '../SideMenu/types';

import { SideMenuItemComponent } from '../SideMenu/SideMenuItem';
import { ScrollbarComponent } from '../ScrollbarComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export type GlobalClickHandler = (item: SideMenuItem) => any;

export interface MobileMenuProps {
    header: ReactNode;
    sections: SideMenuSection[];
    footer?: SideMenuItem[];
    globalHandler?: GlobalClickHandler;
    className?: string;
}

export const MobileMenu: FC<MobileMenuProps> = ({ 
    header, 
    sections,
    footer,
    globalHandler,
    className
}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    subscribeToSharedState("is_loading", (is_loading) => {
        setIsLoading(is_loading ? true : false);
    })

    const onMenuOpenCloseClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const onItemClick = (item: SideMenuItem) => {
        setIsMenuOpen(false);

        if (globalHandler) {
            globalHandler(item);
        }
    }

    let allSections: SideMenuSection[] = [];
    allSections = _.concat(allSections, sections);
    if (footer && footer.length > 0) {
        allSections.push({
            name: "",
            items: footer
        });
    }

    return (
        <header className={cx(styles.mobileMenuContainer, className, { [styles.containerExpanded]: isMenuOpen })}>
            
            <div className={styles.content}>
                
                <div className={styles.header}>
                    {header}
                </div>

                <div className={styles.space}>
                </div>

                <div className={styles.burgerContainer}>
                    <button className={cx(styles.burgerButton)}
                            onClick={() => onMenuOpenCloseClick()}>
                        <FontAwesomeIcon icon={isMenuOpen ? faClose : faBars} />
                    </button>
                </div>

            </div>

            <div className={cx(styles.bar, { [styles.barLoading]: isLoading })} />

            {isMenuOpen && <div className={styles.expandedContent}>

                <ScrollbarComponent>

                    <div className={styles.mainSections}>
                        {getVisibleSections(allSections).map((section, index) => (
                            <div key={index}
                                 className={styles.sectionWrapper}
                                 >
                                {section.name && 
                                    <div className={styles.sectionLabel}>{section.name}</div>}

                                <div className={styles.menuItemList}>
                                    {getVisibleItems(section).map((item, index) =>
                                        <SideMenuItemComponent
                                            key={index}
                                            item={item}
                                            isCollapsed={false}
                                            globalHandler={onItemClick}
                                            />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </ScrollbarComponent>

            </div>}

        </header>
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