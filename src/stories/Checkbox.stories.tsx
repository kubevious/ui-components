import { Story } from '@storybook/react';
import React from 'react';
import { Checkbox } from '../Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
};

export const Default: Story = () => (
    <div style={{ background: '#212122', padding: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
            <Checkbox onChange={() => console.log('Check!')} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Checkbox label="With label" onChange={() => console.log('With label check!')} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Checkbox label="Checked" checked />
        </div>
    </div>
);
