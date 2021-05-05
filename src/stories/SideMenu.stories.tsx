import { Story } from '@storybook/react';
import React from 'react';
import { SideMenu } from '../SideMenu';

export default {
    title: 'SideMenu',
    component: SideMenu,
};

export const Default: Story = () => (
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
                            selected: false,
                        },
                        {
                            key: 'rules',
                            label: 'Rules',
                            icon: '/menu/rules.svg',
                            selected: false,
                        },
                        {
                            key: 'markers',
                            label: 'Markers',
                            icon: '/menu/markers.svg',
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
);

export const Collapsed: Story = () => (
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
                            selected: false,
                        },
                        {
                            key: 'rules',
                            label: 'Rules',
                            icon: '/menu/rules.svg',
                            selected: false,
                        },
                        {
                            key: 'markers',
                            label: 'Markers',
                            icon: '/menu/markers.svg',
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
            isCollapsed
        />
    </div>
);
