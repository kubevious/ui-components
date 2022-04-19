import React, { FC, ReactNode, useState } from 'react';
import { subscribeToSharedState } from '@kubevious/ui-framework';

import { PopupDialog } from '../PopupDialog'
import { OperationLog } from '../OperationLog'
import { ErrorBoxDialog } from '../ErrorBoxDialog'
import { ConfirmationDialog } from '../ConfirmationDialog'
import { GlobalClickHandler, SideMenu } from '../SideMenu';

import styles from './styles.module.css';
import { SideMenuItem, SideMenuSection } from '../SideMenu/types';
// import { SEO } from '../SEO';



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
        
        <SideMenu isCollapsed={isCollapsed} 
                  header={sideMenuHeader}
                  collapsedHeader={sideMenuCollapsedHeader}
                  sections={sideMenuSections}
                  footer={sideMenuFooter}
                  globalHandler={sideMenuGlobalHandler}
                  />

        <div className={styles.mainComponent}
             >
            {children}
        </div>

        <ErrorBoxDialog />

        <PopupDialog />

        <ConfirmationDialog />

        <OperationLog />
    </div>
    );
};
