import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { CodeControl } from '../';

export default {
    title: 'CodeControl',
    component: CodeControl
};

export const Shell: Story = () => (
    <div style={{ margin: '20px', padding: '50px' }}>
        <CodeControl value={COMMANDS} showDownloadButton showCopyButton syntax='shell' />
    </div>
);

export const Javascript: Story = () => (
    <div style={{ margin: '20px', padding: '50px' }}>
        <CodeControl value={JAVASCRIPT} showDownloadButton showCopyButton syntax='javascript' />
    </div>
);

export const ObjectYaml: Story = () => (
    <div style={{ margin: '20px', padding: '50px' }}>
        <CodeControl value={OBJECT} showDownloadButton showCopyButton syntax='yaml' />
    </div>
);

export const ObjectYamlSmallIndent: Story = () => (
    <div style={{ margin: '20px', padding: '50px' }}>
        <CodeControl value={OBJECT} showDownloadButton showCopyButton syntax='yaml' indent={2} />
    </div>
);

export const ObjectJson: Story = () => (
    <div style={{ margin: '20px', padding: '50px' }}>
        <CodeControl value={OBJECT} showDownloadButton showCopyButton syntax='json' />
    </div>
);

export const HeightLimited1: Story = () => (
    <div style={{ margin: '20px', padding: '50px', height: '600px' }}>
        <CodeControl value={OBJECT} showDownloadButton showCopyButton syntax='yaml' />
    </div>
);

export const HeightLimited2: Story = () => (
    <div style={{ margin: '20px', padding: '50px', height: '600px' }}>
        <CodeControl value={COMMANDS} showDownloadButton showCopyButton syntax='shell' />
    </div>
);



export const NoButtons: Story = () => (
    <div style={{ margin: '20px', padding: '50px' }}>
        <CodeControl value={OBJECT} syntax='yaml' />
    </div>
);

export const NoDownloadButton: Story = () => (
    <div style={{ margin: '20px', padding: '50px' }}>
        <CodeControl value={OBJECT} showCopyButton syntax='yaml' />
    </div>
);

export const NoCopyButton: Story = () => (
    <div style={{ margin: '20px', padding: '50px' }}>
        <CodeControl value={OBJECT} showDownloadButton syntax='yaml' />
    </div>
);


export const JavascriptEditable: Story = () => {
    const [code, setCode] = useState<string>(JAVASCRIPT);
    return <div style={{ margin: '20px', padding: '50px' }}>
        <CodeControl value={code} showDownloadButton showCopyButton syntax='javascript'
                    handleChange={(value) => {
                        setCode(value);
                    }} />
    </div>;
}



const COMMANDS = [
    '# COMMENT 1',
    'kubectl create namespace kubevious-agent',
    '# COMMENT 2',
    'kubectl create secret generic kubevious-token -n kubevious-agent \\\n    --from-literal=key=eyJrZXkiOiI4YjFkNWExYzNkZTdlNjEyY2MwOTU3ZDhmZmY0Nzg3MDQ0MzVkZTBlYjI1YzQyYzFhYjZhMWNkYmUwNzY0MTUxNzQ3ZjJkNzAzODQ5NTQzYzZiMWFkYzJhYTM5ODNhOTJmZmM0MjBjOWRkNjk1NzIwNzI0YzczMDQyZTlkYzkyMiJ9 \\\n    --dry-run=client -o yaml |\n    kubectl apply --kubeconfig=mock/kube_config.yaml -f -',
    '# COMMENT 3',
    'helm repo add kubevious https://helm.kubevious.io',
    '# COMMENT 4',
    'helm upgrade --atomic -i -n kubevious-agent kubevious-agent kubevious/kubevious-agent',
];


const JAVASCRIPT = `if (item.hasChildren('Network Policies')) {
    var netpolicies = item.children('Network Policies')[0];
    if (netpolicies.getProperties('properties')['Ingress Blocked'])
    {
        mark('ingress-traffic-blocked');
    }
    else
    {
        mark('ingress-traffic-allowed');
    }  
}
else {
    mark('ingress-network-policy-not-defined');
}
`

const OBJECT = {
    "kind": "yaml",
    "id": "config",
    "config": {
        "kind": "Ingress",
        "apiVersion": "extensions/v1beta1",
        "metadata": {
            "name": "book-web-ingress",
            "namespace": "book",
            "selfLink": "/apis/extensions/v1beta1/namespaces/book/ingresses/book-web-ingress",
            "uid": "452bcf4c-34bb-11ea-9cdc-42010a8001cf",
            "resourceVersion": "84204948",
            "generation": 1,
            "creationTimestamp": "2020-01-11T21:42:31Z",
            "labels": {
                "name": "book-web-ingress"
            },
            "annotations": {
                "ingress.kubernetes.io/backends": "{\"k8s-be-32348--ab64a690ed0b76be\":\"UNHEALTHY\"}",
                "ingress.kubernetes.io/forwarding-rule": "k8s-fw-book-book-web-ingress--ab64a690ed0b76be",
                "ingress.kubernetes.io/target-proxy": "k8s-tp-book-book-web-ingress--ab64a690ed0b76be",
                "ingress.kubernetes.io/url-map": "k8s-um-book-book-web-ingress--ab64a690ed0b76be",
                "kubernetes.io/ingress.allow-http": "true"
            },
            "finalizers": [
                "networking.gke.io/ingress-finalizer"
            ]
        },
        "spec": {
            "backend": {
                "serviceName": "book-web-svc",
                "servicePort": 80
            },
            "rules": [
                {
                    "host": "example.com",
                    "http": {
                        "paths": [
                            {
                                "pathType": "ImplementationSpecific",
                                "backend": {
                                    "serviceName": "book-web-svc",
                                    "servicePort": 80
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "status": {
            "loadBalancer": {
                "ingress": [
                    {
                        "ip": "34.107.21.44"
                    }
                ]
            }
        }
    }
}
