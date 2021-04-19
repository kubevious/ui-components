import { Story } from '@storybook/react';
import React from 'react';
import { PageLink } from '../Link';

export default {
    title: 'Link',
};

export const Default: Story = () => (
    <div>
        <PageLink name="test" path="test" />
    </div>
);
