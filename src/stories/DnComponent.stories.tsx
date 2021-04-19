import { Story } from '@storybook/react';
import React from 'react';
import DnComponent from '../DnComponent';

export default {
    title: 'DnComponent',
};

export const Default: Story = () => (
    <div style={{ background: '#1e1e1e', color: 'white' }}>
        <DnComponent dn="root/ns-[kube-system]" />
    </div>
);
