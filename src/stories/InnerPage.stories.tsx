import { Story } from '@storybook/react';
import React from 'react';
import { BurgerMenu } from '../BurgerMenu';
import { Button } from '../Button';
import { InnerPage } from '../InnerPage';
import { PageHeader } from '../PageHeader';

export default {
    title: 'InnerPage',
    component: InnerPage,
};

export const Default: Story = () => (
    <div style={{ background: '#212122' }}>
        <InnerPage>Hello</InnerPage>
    </div>
);

export const Narrow: Story = () => (
    <div style={{ background: '#212122' }}>
        <InnerPage narrow>narrow</InnerPage>
    </div>
);

export const WithHeader: Story = () => (
    <div style={{ background: '#212122' }}>
        <InnerPage
            header={
                <PageHeader title="Some page">
                    <div className="row">
                        <div className="col-1">
                            <BurgerMenu items={[]} />
                        </div>
                        <div className="col-2 offset-1">
                            <Button type="success">Add New Rule</Button>
                        </div>
                    </div>
                </PageHeader>
            }
        >
            Page with header
        </InnerPage>
    </div>
);
