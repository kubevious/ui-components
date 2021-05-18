import { Story } from '@storybook/react';
import React from 'react';
import { InnerPage } from '../InnerPage';
import { Select } from '../Select';

export default {
    title: 'Select',
    component: Select,
};

export const Default: Story = () => (
    <InnerPage>
        <div style={{ height: 500, background: '#2f3036', padding: '1rem' }}>
            <Select
                options={[
                    { label: 'First', value: 'first' },
                    { label: 'Second', value: 'second' },
                    { label: 'Third', value: 'third' },
                ]}
                placeholder="Placeholder"
                onChange={() => console.log('on change')}
            />
        </div>
    </InnerPage>
);
