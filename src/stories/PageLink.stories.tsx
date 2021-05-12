import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '../Button';
import { PageLink } from '../PageLink';

export default {
    title: 'PageLink',
};

export const Default: Story = () => (
    <BrowserRouter>
        <div>
            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="Simple" path="/simple" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <PageLink name="With query params" path="/link" searchParams={{ clusterId: '1' }} />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <PageLink
                    name="With many query params"
                    path="/link"
                    searchParams={{ clusterId: '1', clusterName: 'cluster' }}
                />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <PageLink
                    path="/link"
                    searchParams={{ clusterId: '1', clusterName: 'cluster' }}
                >
                    <Button>Link button</Button>
                </PageLink>
            </div>
        </div>
    </BrowserRouter>
);
