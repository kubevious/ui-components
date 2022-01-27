import { faBug } from '@fortawesome/free-solid-svg-icons';
import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { InnerPage } from '../InnerPage';
import { SideMenu } from './';
import { SideMenuItem, SideMenuSection } from './types';
import { CallbackHook } from '../CallbackHook';

import { app } from '@kubevious/ui-framework';

export default {
    title: 'SideMenu',
    component: SideMenu,
};

export const Default: Story = () => (
    <BrowserRouter>
        <div style={{ height: '100vh' }}>
            <SideMenu
                header={<>
                    <span >KUBEVIOUS</span>
                </>}
                collapsedHeader={<>
                    <span >KUBE</span>
                </>}
                sections={DEFAULT_SECTIONS}
                footer={DEFAULT_FOOTER}
                isCollapsed={false}
            />
        </div>
    </BrowserRouter>
);

export const Collapsed: Story = () => (
    <BrowserRouter>
        <div style={{ height: '100vh' }}>
            <SideMenu
                header={<>
                    <span >KUBEVIOUS</span>
                </>}
                collapsedHeader={<>
                    <span >KUBE</span>
                </>}
                sections={DEFAULT_SECTIONS}
                footer={DEFAULT_FOOTER}
                isCollapsed
            />
        </div>
    </BrowserRouter>
);


export const IsLoading: Story = () => (
    <BrowserRouter>
        <CallbackHook
            setup={() => app.sharedState.set("is_loading", true)}
            cleanup={() => app.sharedState.set("is_loading", false)}
            />
        <div style={{ height: '100vh' }}>
            <SideMenu
                header={<>
                    <span >KUBEVIOUS</span>
                </>}
                collapsedHeader={<>
                    <span >KUBE</span>
                </>}
                sections={DEFAULT_SECTIONS}
                footer={DEFAULT_FOOTER}
            />
        </div>
    </BrowserRouter>
);

export const IsLoadingCollapsed: Story = () => (
    <BrowserRouter>
        <CallbackHook
            setup={() => app.sharedState.set("is_loading", true)}
            cleanup={() => app.sharedState.set("is_loading", false)}
            />
        <div style={{ height: '100vh' }}>
            <SideMenu
                header={<>
                    <span >KUBEVIOUS</span>
                </>}
                collapsedHeader={<>
                    <span >KUBE</span>
                </>}
                sections={DEFAULT_SECTIONS}
                footer={DEFAULT_FOOTER}
                isCollapsed
            />
        </div>
    </BrowserRouter>
);

export const Layout: Story = () => (
    <BrowserRouter>
        <div style={{ height: '100vh', display: 'flex', background: '#2f3036', position: 'relative' }}>
            <SideMenu
                header={<>
                    <span >KUBEVIOUS</span>
                </>}
                collapsedHeader={<>
                    <span >KUBE</span>
                </>}
                sections={DEFAULT_SECTIONS}
                footer={DEFAULT_FOOTER}
                isCollapsed
            />

            <div style={{ width: 'calc(100vw - 80px)', position: 'relative' }}>
                <InnerPage>
                    <div style={{ height: '80vh', width: '100%', background: 'gray' }} />
                </InnerPage>
            </div>
        </div>
    </BrowserRouter>
);


const DEFAULT_SECTIONS : SideMenuSection[] = [
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
    }
]

const DEFAULT_FOOTER : SideMenuItem[] = [
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
]