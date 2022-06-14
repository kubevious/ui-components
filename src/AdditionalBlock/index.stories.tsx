import { Story } from '@storybook/react';
import React from 'react';
import { AdditionalBlock } from './';

export default {
    title: 'AdditionalBlock',
    component: AdditionalBlock
};

export const Default: Story = () => (
    <div style={{ background: 'yellow', margin: '20px' }}>

        <div style={{ background: 'blue', margin: '20px', padding: '20px' }}>
            <AdditionalBlock
                title="Hello World"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                action="Do Something"
                footer="bye bye"
                >
                EXTRA CHILDREN
            </AdditionalBlock>
        </div>

    </div>
);
