import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { InnerPage } from '../InnerPage';
import { SideMenuItemComponent } from './';
import { SideMenuItem, SideMenuSection } from './types';
import { CallbackHook } from '../CallbackHook';

import { app } from '@kubevious/ui-framework';

export default {
    title: 'SideMenuItemComponent',
    component: SideMenuItemComponent,
};

function handleMenuClick(item: SideMenuItem) {
    console.log("[handleMenuClick] ", item.key);
}

const SIDE_MENU_ITEM = {
    key: 'dashboard',
    label: 'Dashboard',
    icon: '/dashboard.svg',
    url: '/',
};

export const Default: Story = () => (
    <BrowserRouter>
        <div style={{ background: "black", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "40px"}}>

            <SideMenuItemComponent item={SIDE_MENU_ITEM} />

            <SideMenuItemComponent item={SIDE_MENU_ITEM} isSelected={true} />

            <SideMenuItemComponent item={SIDE_MENU_ITEM} isCollapsed={true} />

            <SideMenuItemComponent item={SIDE_MENU_ITEM} isCollapsed={true} isSelected={true} />

        </div>
    </BrowserRouter>
);