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
            <PageLinkButton
                linkProps={{
                    path: '/somewhere',
                }}
                buttonProps={{
                    type: 'success',
                    children: 'Button text',
                }}
            />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <PageLinkButton
                linkProps={{
                    path: '/somewhere',
                    searchParams: {
                        cluster: '21',
                    },
                }}
                buttonProps={{
                    type: 'ghost',
                    children: 'Link with params',
                }}
            />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <PageLinkButton
                linkProps={{
                    path: '/somewhere',
                    searchParams: {
                        cluster: '21',
                    },
                }}
                buttonProps={{
                    type: 'danger',
                    children: <span>With span button text</span>,
                }}
            />
        </div>
    </BrowserRouter>
);
