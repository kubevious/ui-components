import { Story } from '@storybook/react';
import React from 'react';
import { SeverityIcon } from './';

export default {
    title: 'SeverityIcon',
    component: SeverityIcon
};

export const Warning: Story = () => {
    return <>
        <div style={{ background: '#1e1e1e' }}>
            <SeverityIcon severity="warn" />
        </div>
    </>;
};

export const Error: Story = () => {
    return <>
        <div style={{ background: '#1e1e1e' }}>
            <SeverityIcon severity="error" />
        </div>
    </>;
};


export const ExtraStyle: Story = () => {
    return <>
        <div style={{ background: '#1e1e1e' }}>
            <SeverityIcon severity="error" extraClassNames={{}} />
        </div>
    </>;
};
