import { Story } from '@storybook/react';
import React from 'react';
import { YamlControlBar } from '../YamlControlBar';

export default {
    title: 'YamlControlBar',
};

const commands = [
    'kubectl create namespace kubevious-agent',
    'kubectl create secret generic kubevious-token -n kubevious-agent \\\n    --from-literal=key=eyJrZXkiOiI4YjFkNWExYzNkZTdlNjEyY2MwOTU3ZDhmZmY0Nzg3MDQ0MzVkZTBlYjI1YzQyYzFhYjZhMWNkYmUwNzY0MTUxNzQ3ZjJkNzAzODQ5NTQzYzZiMWFkYzJhYTM5ODNhOTJmZmM0MjBjOWRkNjk1NzIwNzI0YzczMDQyZTlkYzkyMiJ9 \\\n    --dry-run=client -o yaml |\n    kubectl apply --kubeconfig=mock/kube_config.yaml -f -\n',
    'helm repo add kubevious https://helm.kubevious.io',
    'helm upgrade --atomic -i -n kubevious-agent kubevious-agent kubevious/kubevious-agent',
];

export const Default: Story = () => (
    <div>
        <YamlControlBar value="kubectl create namespace kubevious-agent" downloadButton />
    </div>
);

export const ArrayOfCommands: Story = () => (
    <div>
        <YamlControlBar value={JSON.stringify(commands, null, 4)} downloadButton mode="shell" />
    </div>
);
