import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageLinkButton } from '../PageLinkButton';

export default {
    title: 'PageLinkButton',
    component: PageLinkButton,
};

export const Default: Story = () => (
    <BrowserRouter>
        <div style={{ marginBottom: '1rem' }}>
            <PageLinkButton path="/somewhere">Button text</PageLinkButton>
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <PageLinkButton
                path="/somewhere"
                searchParams={{
                    cluster: '21',
                }}
                type="ghost"
            >
                Link with params
            </PageLinkButton>
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <PageLinkButton
                path="/somewhere"
                searchParams={{
                    cluster: '21',
                }}
                type="danger"
            >
                <span>With span button text</span>
            </PageLinkButton>
        </div>
    </BrowserRouter>
);
