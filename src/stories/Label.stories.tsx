import React from 'react';
import { Story } from '@storybook/react';
import { Label } from '..';

export default {
    title: 'Label',
    component: Label,
};

export const Default: Story = () => (
    <div style={{ background: '#212122', padding: '1rem' }}>

        <div style={{ marginBottom: '1rem' }}>
            <Label text="Default Label" />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Label text="Normal Label" size="normal" />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Label text="Small Label" size="small" />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Label text="Large Label" size="large" />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Label text="XLarge Label" size="xlarge" />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Label text="Faded Normal Label" faded={true} size="normal" />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Label text="Faded Small Label" faded={true} size="small" />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Label text="Faded Large Label" faded={true} size="large" />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Label text="Faded XLarge Label" faded={true} size="xlarge" />
        </div>
        
    </div>
);
