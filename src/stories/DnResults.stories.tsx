import { app } from '@kubevious/ui-framework';
import { Story } from '@storybook/react';
import React from 'react';
import { DnResults } from '../DnResults';
import { InnerPage } from '../InnerPage';

export default {
    title: 'DnResults',
    component: DnResults,
};

const sharedState = app.sharedState;

sharedState.set('clusters_dict', {
    '1': {
        name: 'Cluster name 1',
    },
    '2': {
        name: 'Cluster name 2',
    },
});

export const Default: Story = () => (
    <div style={{ background: '#1e1e1e', color: 'white' }}>
        <InnerPage>
            <DnResults
                items={[
                    { dn: 'root/ns-[kube-system]', clusterId: '1' },
                    { dn: 'root/ns-[kube-system]', clusterId: '1' },
                    { dn: 'root/ns-[kube-system]', clusterId: '2' },
                ]}
            />
        </InnerPage>
    </div>
);
