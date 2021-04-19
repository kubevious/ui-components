import { Story } from '@storybook/react';
import React from 'react';
import { YamlControlBar } from '../YamlControlBar';

export default {
    title: 'YamlControlBar',
};

export const Default: Story = () => (
    <div>
        <YamlControlBar value="test value" downloadButton />
    </div>
);
