import { Story } from '@storybook/react';
import React from 'react';
import { Tabs } from '../Tabs';
import { Tab } from '../Tabs/Tab';

export default {
    title: 'Tabs',
};

export const Default: Story = () => (
    <div style={{ background: '#212122', color: 'white', padding: '1rem' }}>
        <Tabs>
            <Tab key="1" label="Edit Rule">
                Edit rule...
            </Tab>

            <Tab key="2" label="Affected Objects (16)">
                Affected Objects (16)
            </Tab>
        </Tabs>
    </div>
);
