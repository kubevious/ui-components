import { Story } from '@storybook/react';
import React from 'react';
import { Input } from '../Input';

export default {
    title: 'Input',
    component: Input,
};

export const Default: Story = () => (
    <div style={{ background: '#212122', padding: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
            <Input />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Input label="Marker name" onChange={(e) => console.log('VALUE => ', e.target.value)} />
        </div>

        <div>
            <Input label="With error" hasError />
        </div>
    </div>
);
