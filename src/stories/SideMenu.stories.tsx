import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SideMenu } from '../SideMenu';

export default {
    title: 'SideMenu',
    component: SideMenu,
};

export const Default: Story = () => (
    <BrowserRouter>
        <div style={{ height: '100vh' }}>
            <SideMenu
                sections={[
                    {
                        name: 'Dashboard',
                        items: [
                            {
                                key: 'dashboard',
                                label: 'Dashboard',
                                icon: '/menu/dashboard.svg',
                                url: '/',
                                selected: true,
                            },
                        ],
                    },
                    {
                        name: 'Setup',
                        items: [
                            {
                                key: 'clusters',
                                label: 'Clusters',
                                icon: '/menu/clusters.svg',
                                url: '/clusters',
                                selected: false,
                            },
                            {
                                key: 'rules',
                                label: 'Rules',
                                icon: '/menu/rules.svg',
                                url: '/rules',
                                selected: false,
                            },
                            {
                                key: 'markers',
                                label: 'Markers',
                                icon: '/menu/markers.svg',
                                url: '/markers',
                                selected: false,
                            },
                        ],
                    },
                ]}
                footer={[
                    {
                        key: 'logout',
                        label: 'Log out',
                        icon: 'menu/logout.svg',
                        onClick: () => console.log('Sign out!'),
                    },
                    {
                        key: 'close',
                        label: 'Close',
                        icon: 'menu/close.svg',
                        onClick: () => console.log('Close!'),
                    },
                ]}
                isCollapsed={false}
            />
        </div>
    </BrowserRouter>
);

export const Collapsed: Story = () => (
    <BrowserRouter>
        <div style={{ height: '100vh' }}>
            <SideMenu
                sections={[
                    {
                        name: 'Dashboard',
                        items: [
                            {
                                key: 'dashboard',
                                label: 'Dashboard',
                                icon: '/menu/dashboard.svg',
                                url: '/',
                                selected: true,
                            },
                        ],
                    },
                    {
                        name: 'Setup',
                        items: [
                            {
                                key: 'clusters',
                                label: 'Clusters',
                                icon: '/menu/clusters.svg',
                                url: '/clusters',
                                selected: false,
                            },
                            {
                                key: 'rules',
                                label: 'Rules',
                                icon: '/menu/rules.svg',
                                url: '/rules',
                                selected: false,
                            },
                            {
                                key: 'markers',
                                label: 'Markers',
                                icon: '/menu/markers.svg',
                                url: '/markers',
                                selected: false,
                            },
                        ],
                    },
                ]}
                footer={[
                    {
                        key: 'logout',
                        label: 'Log out',
                        icon: 'menu/logout.svg',
                        onClick: () => console.log('Sign out!'),
                    },
                    {
                        key: 'close',
                        label: 'Close',
                        icon: 'menu/open.svg',
                        onClick: () => console.log('Close!'),
                    },
                ]}
                isCollapsed
            />
        </div>
    </BrowserRouter>
);
