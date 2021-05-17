import React from 'react';
import { Story } from '@storybook/react';
import { MarkerPreview } from '../MarkerPreview';

export default {
    title: 'MarkerPreview',
    component: MarkerPreview,
};

export const Default: Story = () => (
    <div style={{ background: '#212122', padding: '1rem' }}>
        <MarkerPreview shape="f164" color="#FFFFFF" />
    </div>
);
