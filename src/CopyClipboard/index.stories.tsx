import { Story } from '@storybook/react';
import React from 'react';
import { CopyClipboard } from '../CopyClipboard';

export default {
    title: 'CopyClipboard',
    component: CopyClipboard
};

export const PopupLeft: Story = () => (
    <div style={{ position: 'relative', backgroundColor: '#000000', padding: '200px' }}>
        <CopyClipboard text='Some text' />
    </div>
);

export const PopupRight: Story = () => (
    <div style={{ position: 'relative', backgroundColor: '#000000', padding: '200px' }}>
        <CopyClipboard text='Some text' popupRight />
    </div>
);
