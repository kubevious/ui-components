import { Story } from '@storybook/react';
import React from 'react';
import { PageLink } from '../PageLink';

export default {
    title: 'PageLink',
};

export const Default: Story = () => (
    <div>
        <PageLink name="test" path="test" />
    </div>
);
