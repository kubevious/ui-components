import React, { FC, ReactNode, useState } from 'react';
import { subscribeToSharedState } from '@kubevious/ui-framework';

import { PopupDialog } from '../PopupDialog'
import { OperationLog } from '../OperationLog'
import { ErrorBoxDialog } from '../ErrorBoxDialog'
import { ConfirmationDialog } from '../ConfirmationDialog'
import { GlobalClickHandler, SideMenu } from '../SideMenu';
import { MobileMenu } from '../MobileMenu';

import styles from './styles.module.css';
import cx from 'classnames';

import { SideMenuItem, SideMenuSection } from '../SideMenu/types';

export interface MainTemplateProps {
    sideMenuHeader: ReactNode;
    sideMenuCollapsedHeader: ReactNode;
    sideMenuSections: SideMenuSection[];
    sideMenuFooter?: SideMenuItem[];
    sideMenuGlobalHandler?: GlobalClickHandler;

    firstContent?: ReactNode;
}

export const MainTemplate: FC<MainTemplateProps> = ({ 
    sideMenuHeader,
    sideMenuCollapsedHeader,
    sideMenuSections,
    sideMenuFooter,
    sideMenuGlobalHandler,
    firstContent,
    children
 }) => {

    const [isCollapsed, setCollapsed] = useState<boolean>(false);

    subscribeToSharedState('is_side_menu_collapsed', (value) => {
        setCollapsed(value);
    })

    return (<div className={styles.mainContainer}>
        
        {firstContent}
        
        <SideMenu className={styles.sideMenu}
                  isCollapsed={isCollapsed} 
                  header={sideMenuHeader}
                  collapsedHeader={sideMenuCollapsedHeader}
                  sections={sideMenuSections}
                  footer={sideMenuFooter}
                  globalHandler={sideMenuGlobalHandler}
                  />


        <div className={cx(styles.innerContainer, {[styles.innerContainerExpandedSideMenu] : !isCollapsed})}>

            <div className={styles.mobileMenu}>
                <MobileMenu header={sideMenuHeader}
                            sections={sideMenuSections}
                            footer={sideMenuFooter}
                            globalHandler={sideMenuGlobalHandler}
                            />
            </div>

            <div className={styles.mainComponent}
                >
                {children}
            </div>

        </div>

        <ErrorBoxDialog />

        <PopupDialog />

        <ConfirmationDialog />

        <OperationLog />
    </div>
    );
};
