import { Story } from '@storybook/react';
import React from 'react';
import { DnShortcutComponent } from '../DnShortcutComponent';

export default {
    title: 'DnShortcutComponent',
};

export const Default: Story = () => (
    <div style={{ background: '#1e1e1e', color: 'white' }}>
        <DnShortcutComponent dn="root/ns-[kube-system]" />
    </div>
);
