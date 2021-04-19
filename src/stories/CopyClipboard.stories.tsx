import { Story } from '@storybook/react';
import React from 'react';
import CopyClipboard from '../CopyClipboard';

export default {
    title: 'CopyClipboard',
};

export const Default: Story = () => <div style={{ position: 'relative' }}><CopyClipboard text='Some text' /></div>;
