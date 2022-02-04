import { Story } from '@storybook/react';
import React from 'react';
import { BurgerMenu } from '../BurgerMenu';
import { Button } from '../Button';
import { PageHeader } from '../PageHeader';
import { InnerPage } from './';

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
        <InnerPage narrow>
            <div style={{ background: 'red' }}>narrow</div>
        </InnerPage>
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

export const NarrowWithHeader: Story = () => (
    <div style={{ background: '#212122' }}>
        <InnerPage
            narrow
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

export const MidNarrowWithHeader: Story = () => (
    <div style={{ background: '#212122' }}>
        <InnerPage
            midNarrow
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
