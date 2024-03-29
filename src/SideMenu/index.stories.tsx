import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { InnerPage } from '../InnerPage';
import { SideMenu } from './';
import { SideMenuItem } from './types';
import { CallbackHook } from '../CallbackHook';

import { app } from '@kubevious/ui-framework';

import { DEFAULT_SECTIONS, DEFAULT_FOOTER } from '../mock/menu';

export default {
    title: 'SideMenu',
    component: SideMenu,
};

function handleMenuClick(item: SideMenuItem) {
    console.log("[handleMenuClick] ", item.key);
}

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
                globalHandler={handleMenuClick}
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

