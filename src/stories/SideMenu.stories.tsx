import { faBug } from '@fortawesome/free-solid-svg-icons';
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
                                icon: '/dashboard.svg',
                                url: '/',
                            },
                        ],
                    },
                    {
                        name: 'Setup',
                        items: [
                            {
                                key: 'clusters',
                                label: 'Clusters',
                                icon: '/clusters.svg',
                                url: '/clusters',
                            },
                            {
                                key: 'rules',
                                label: 'Rules',
                                icon: '/rules.svg',
                                url: '/rules',
                            },
                            {
                                key: 'markers',
                                label: 'Markers',
                                icon: '/markers.svg',
                                url: '/markers',
                            },
                            {
                                key: 'font-awesome',
                                label: 'Font awesome',
                                faIcon: faBug,
                                url: '/font-awesome',
                            },
                        ],
                    },
                ]}
                footer={[
                    {
                        key: 'logout',
                        label: 'Log out',
                        icon: '/logout.svg',
                        onClick: () => console.log('Sign out!'),
                    },
                    {
                        key: 'close',
                        label: 'Close',
                        icon: '/close.svg',
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
                                icon: '/dashboard.svg',
                                url: '/',
                            },
                        ],
                    },
                    {
                        name: 'Setup',
                        items: [
                            {
                                key: 'clusters',
                                label: 'Clusters',
                                icon: '/clusters.svg',
                                url: '/clusters',
                            },
                            {
                                key: 'rules',
                                label: 'Rules',
                                icon: '/rules.svg',
                                url: '/rules',
                            },
                            {
                                key: 'markers',
                                label: 'Markers',
                                icon: '/markers.svg',
                                url: '/markers',
                            },
                        ],
                    },
                ]}
                footer={[
                    {
                        key: 'logout',
                        label: 'Log out',
                        icon: '/logout.svg',
                        onClick: () => console.log('Sign out!'),
                    },
                    {
                        key: 'close',
                        label: 'Close',
                        icon: '/open.svg',
                        onClick: () => console.log('Close!'),
                    },
                ]}
                isCollapsed
            />
        </div>
    </BrowserRouter>
);

export const WithItemsActions: Story = () => (
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
                                icon: '/dashboard.svg',
                                url: '/',
                            },
                        ],
                    },
                    {
                        name: 'Setup',
                        items: [
                            {
                                key: 'clusters',
                                label: 'Clusters',
                                icon: '/clusters.svg',
                                url: '/clusters',
                            },
                            {
                                key: 'rules',
                                label: 'Rules',
                                icon: '/rules.svg',
                                url: '/rules',
                            },
                            {
                                key: 'markers',
                                label: 'Markers',
                                icon: '/markers.svg',
                                url: '/markers',
                            },
                        ],
                    },
                    {
                        name: 'Dev tools',
                        items: [
                            {
                                key: 'shared-state-debugger',
                                label: 'Shared State Debugger',
                                faIcon: faBug,
                                onClick: () => console.log('Shared State Debugger'),
                            },
                        ],
                    },
                ]}
                footer={[
                    {
                        key: 'logout',
                        label: 'Log out',
                        icon: '/logout.svg',
                        onClick: () => console.log('Sign out!'),
                    },
                    {
                        key: 'close',
                        label: 'Close',
                        icon: '/close.svg',
                        onClick: () => console.log('Close!'),
                    },
                ]}
                isCollapsed={false}
            />
        </div>
    </BrowserRouter>
);

export const CollapsedWithActions: Story = () => (
    <BrowserRouter>
        <div style={{ height: '100vh' }}>
            <SideMenu
                sections={[
                    {
                        name: 'Dev tools',
                        items: [
                            {
                                key: 'shared-state-debugger',
                                label: 'Shared State Debugger',
                                faIcon: faBug,
                                onClick: () => console.log('Shared State Debugger'),
                            },
                        ],
                    },
                ]}
                isCollapsed
            />
        </div>
    </BrowserRouter>
);
