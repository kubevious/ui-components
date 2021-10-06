import _ from 'the-lodash';
import { app } from '@kubevious/ui-framework';
import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../Button';
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
                    { dn: 'root/logic/ns-[kube-system]', clusterId: '1' },
                    { dn: 'root/logic/ns-[kube-system]', clusterId: '1' },
                    { dn: 'root/logic/ns-[kube-system]', clusterId: '2' },
                ]}
            />
        </InnerPage>
    </div>
);

export const UpdatableResults: Story = () => {
    const [items, setItems] = useState<any[]>([]);

    return (<div style={{ background: '#1e1e1e', color: 'white' }}>
        <InnerPage>
            <Button onClick={() => {
                let newItems = _.clone(items);
                newItems.push({ dn: 'root/logic/ns-[kube-system]' });
                setItems(newItems);
            }} >
                Generate Items
            </Button>
            <DnResults
                items={items}
            />
        </InnerPage>
    </div>)
}

