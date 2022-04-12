import { Story } from '@storybook/react';
import React from 'react';
import { Tabs } from '.';
import { Tab } from './Tab';

export default {
    title: 'Tabs',
    component: Tabs
};

export const Default: Story = () => (
    <div style={{ background: '#212122', color: 'white', padding: '1rem', height: '100vh' }}>
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
