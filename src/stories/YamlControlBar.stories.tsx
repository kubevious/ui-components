import { Story } from '@storybook/react';
import React from 'react';
import { YamlControlBar } from '../YamlControlBar';

export default {
    title: 'YamlControlBar',
};

export const Default: Story = () => (
    <div>
        <YamlControlBar
            value="kubectl create secret generic kubevious-token -n kubevious-agent \\\n    --from-literal=key=eyJrZXkiOiI4YjFkNWExYzNkZTdlNjEyY2MwOTU3ZDhmZmY0Nzg3MDQ0MzVkZTBlYjI1YzQyYzFhYjZhMWNkYmUwNzY0MTUxNzQ3ZjJkNzAzODQ5NTQzYzZiMWFkYzJhYTM5ODNhOTJmZmM0MjBjOWRkNjk1NzIwNzI0YzczMDQyZTlkYzkyMiJ9 \\\n    --dry-run=client -o yaml |\n    kubectl apply --kubeconfig=mock/kube_config.yaml -f -\n"
            downloadButton
        />
    </div>
);
