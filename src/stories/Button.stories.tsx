import { Story } from '@storybook/react';
import React from 'react';
import { Button } from '..';

export default {
    title: 'Button',
    component: Button,
};

export const Default: Story = () => (
    <div style={{ background: '#212122', padding: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
            <Button type="success">Success</Button>
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Button type="danger">Danger</Button>
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Button type="ghost">Ghost</Button>
        </div>
    </div>
);
