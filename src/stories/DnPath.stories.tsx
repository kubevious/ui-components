import React from 'react';
import { Story } from '@storybook/react';
import DnPath from '../DnPath';

export default {
    title: 'DnPath',
};

export const Default: Story = () => (
    <div style={{ background: '#1e1e1e', color: 'white' }}>
        <DnPath
            dnParts={[
                {
                    rn: 'ns-[gitlab]',
                    kind: 'ns',
                    name: 'gitlab',
                },
                {
                    rn: 'app-[gitlab-gitlab-exporter]',
                    kind: 'app',
                    name: 'gitlab-gitlab-exporter',
                },
                {
                    rn: 'initcont-[configure]',
                    kind: 'initcont',
                    name: 'configure',
                },
            ]}
        />
    </div>
);
