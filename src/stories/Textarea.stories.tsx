import { Story } from '@storybook/react';
import React from 'react';
import { Textarea } from '../Textarea';

export default {
    title: 'Textarea',
    component: Textarea,
};

export const Default: Story = () => (
    <div style={{ background: '#212122', padding: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
            <Textarea label="Textarea" />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Textarea label="With error" hasError />
        </div>
    </div>
);
