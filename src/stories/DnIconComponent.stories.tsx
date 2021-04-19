import { Story } from '@storybook/react';
import React from 'react';
import { DnIconComponent } from '../DnIconComponent';

export default {
    title: 'DnIconComponent',
};

export const Default: Story = () => (
    <div className="p-3">
        <h2>Size: xs</h2>
        <div className="d-flex flex-wrap">
            <DnIconComponent kind="ns" size="xs" />
            <DnIconComponent kind="app" size="xs" />
            <DnIconComponent kind="configmap" size="xs" />
            <DnIconComponent kind="image" size="xs" />
            <DnIconComponent kind="node" size="xs" />
            <DnIconComponent kind="pod" size="xs" />
            <DnIconComponent kind="port" size="xs" />
            <DnIconComponent kind="service" size="xs" />
            <DnIconComponent kind="vol" size="xs" />
            <DnIconComponent kind="volume" size="xs" />
        </div>

        <h2>Size: md</h2>
        <div className="d-flex flex-wrap">
            <DnIconComponent kind="ns" size="md" />
            <DnIconComponent kind="app" size="md" />
            <DnIconComponent kind="configmap" size="md" />
            <DnIconComponent kind="image" size="md" />
            <DnIconComponent kind="node" size="md" />
            <DnIconComponent kind="pod" size="md" />
            <DnIconComponent kind="port" size="md" />
            <DnIconComponent kind="service" size="md" />
            <DnIconComponent kind="vol" size="md" />
            <DnIconComponent kind="volume" size="md" />
        </div>

        <h2>Size: lg</h2>
        <div className="d-flex flex-wrap">
            <DnIconComponent kind="ns" size="lg" />
            <DnIconComponent kind="app" size="lg" />
            <DnIconComponent kind="configmap" size="lg" />
            <DnIconComponent kind="image" size="lg" />
            <DnIconComponent kind="node" size="lg" />
            <DnIconComponent kind="pod" size="lg" />
            <DnIconComponent kind="port" size="lg" />
            <DnIconComponent kind="service" size="lg" />
            <DnIconComponent kind="vol" size="lg" />
            <DnIconComponent kind="volume" size="lg" />
        </div>
    </div>
);
