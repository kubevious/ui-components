import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Story } from '@storybook/react';
import React from 'react';
import { Input } from './';

export default {
    title: 'Input',
    component: Input,
};

export const Default: Story = () => (
    <div style={{ background: '#212122', padding: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
            <Input />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Input label="Marker name" onChange={(e) => console.log('VALUE => ', e.target.value)} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Input label="With error" hasError />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Input
                label="With right icon"
                placeholder="Search"
                rightIcon={<FontAwesomeIcon icon={faSearch} size="lg" />}
            />
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <Input
                label="With error and right icon"
                placeholder="Search"
                hasError
                rightIcon={<FontAwesomeIcon icon={faSearch} size="lg" />}
            />
        </div>
    </div>
);
