import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { InnerPage } from '../InnerPage';
import { MobileMenu } from './';
import { SideMenuItem } from '../SideMenu/types';
import { CallbackHook } from '../CallbackHook';

import { app } from '@kubevious/ui-framework';

import { DEFAULT_SECTIONS, DEFAULT_FOOTER } from '../mock/menu';

export default {
    title: 'MobileMenu',
    component: MobileMenu,
};

function handleMenuClick(item: SideMenuItem) {
    console.log("[handleMenuClick] ", item.key);
}

export const Default: Story = () => (
    <BrowserRouter>
        <div style={{ height: '100vh', background: 'lightblue' }}>
            <MobileMenu
                header={<>
                    <span >KUBEVIOUS</span>
                </>}
                sections={DEFAULT_SECTIONS}
                footer={DEFAULT_FOOTER}
                globalHandler={handleMenuClick}
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
        <div style={{ height: '100vh', background: 'lightblue'  }}>
            <MobileMenu
                header={<>
                    <span >KUBEVIOUS</span>
                </>}
                sections={DEFAULT_SECTIONS}
                footer={DEFAULT_FOOTER}
            />
        </div>
    </BrowserRouter>
);

export const Layout: Story = () => (
    <BrowserRouter>
        <div style={{ height: '100vh', display: 'flex', background: 'lightblue', position: 'relative' }}>
            <MobileMenu
                header={<>
                    <span >KUBEVIOUS</span>
                </>}
                sections={DEFAULT_SECTIONS}
                footer={DEFAULT_FOOTER}
            />

            <div style={{ width: 'calc(100vw - 80px)', position: 'relative' }}>
                <InnerPage>
                    <div style={{ height: '80vh', width: '100%', background: 'gray' }} />
                </InnerPage>
            </div>
        </div>
    </BrowserRouter>
);

