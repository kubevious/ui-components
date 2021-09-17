import React from 'react';
import { Story } from '@storybook/react';
import { MarkerPreview } from './';

export default {
    title: 'MarkerPreview',
    component: MarkerPreview,
};

export const Default: Story = () => (
    <div style={{ background: '#212122', padding: '1rem' }}>

        <div>
            <MarkerPreview shape="f164" color="#FFFFFF" />
        </div>

        <div>
            <MarkerPreview shape="f165" color="#FF0101" />
        </div>
    </div>
);
