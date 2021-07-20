import React from 'react';
import { Story } from '@storybook/react';
import { Label } from '..';

export default {
    title: 'Label',
    component: Label,
};

export const Default: Story = () => (
    <div>

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
                <Label text="Faded Normal Label" color="faded" size="normal" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Label text="Faded Small Label" color="faded" size="small" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Label text="Faded Large Label" color="faded" size="large" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Label text="Faded XLarge Label" color="faded" size="xlarge" />
            </div>


            <div style={{ marginBottom: '1rem' }}>
                <Label text="Light Normal Label" color="light" size="normal" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Label text="Light Small Label" color="light" size="small" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Label text="Light Large Label" color="light" size="large" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Label text="Light XLarge Label" color="light" size="xlarge" />
            </div>

        </div>

        <div style={{ background: '#EEEEEE', padding: '1rem' }}>


            <div style={{ marginBottom: '1rem' }}>
                <Label text="Dark Normal Label" color="dark" size="normal" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Label text="Dark Small Label" color="dark" size="small" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Label text="Dark Large Label" color="dark" size="large" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <Label text="Dark XLarge Label" color="dark" size="xlarge" />
            </div>
            
        </div>
        
    </div>
);
