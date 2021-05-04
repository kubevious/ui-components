import { Story } from '@storybook/react';
import React from 'react';
import { BurgerMenu, Button, PageHeader } from '..';

export default {
    title: 'PageHeader',
    component: PageHeader,
};

export const Default: Story = () => (
    <div style={{ background: '#2f3036', padding: '1rem' }}>
        <PageHeader title="Rules">
            <div className="row">
                <div className="col-1">
                    <BurgerMenu items={[]} />
                </div>
                <div className="col-2 offset-1">
                    <Button type="success">Add New Rule</Button>
                </div>
            </div>
        </PageHeader>
    </div>
);
