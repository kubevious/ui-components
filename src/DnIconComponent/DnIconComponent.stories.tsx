import { Story } from '@storybook/react';
import React from 'react';
import { DnIconComponent } from './';

import { parseDn } from '@kubevious/entity-meta'

import styles from './story-styles.module.css';

export default {
    title: 'DnIconComponent',
    component: DnIconComponent,
};

export const Default: Story = () => (
    <div className="p-3">
        <h2>Size: xs</h2>
        <div className="d-flex flex-wrap">
            <DnIconComponent dnParts={parseDn("root/logic/ns-[gitlab]")} size="xs" />
            <DnIconComponent dnParts={parseDn("root/logic/ns-[gitlab]/app-[gitlab-cert-manager-webhook]")} size="xs" />
            <DnIconComponent dnParts={parseDn("root/logic/ns-[gitlab]/app-[gitlab-cert-manager-webhook]/launcher-[Deployment]")} size="xs" />
            <DnIconComponent dnParts={parseDn("root/images/repo-[dockerhub]")} size="xs" />
            <DnIconComponent dnParts={parseDn("root/images/repo-[dockerhub]/image-[busybox]")} size="xs" />
            <DnIconComponent dnParts={parseDn("root/images/repo-[dockerhub]/image-[busybox]/tag-[latest]")} size="xs" />
        </div>
 
        <h2>Size: md</h2>
        <div className="d-flex flex-wrap">
            <DnIconComponent dnParts={parseDn("root/logic/ns-[gitlab]")} size="md" />
            <DnIconComponent dnParts={parseDn("root/logic/ns-[gitlab]/app-[gitlab-cert-manager-webhook]")} size="md" />
            <DnIconComponent dnParts={parseDn("root/logic/ns-[gitlab]/app-[gitlab-cert-manager-webhook]/launcher-[Deployment]")} size="md" />
            <DnIconComponent dnParts={parseDn("root/images/repo-[dockerhub]")} size="md" />
            <DnIconComponent dnParts={parseDn("root/images/repo-[dockerhub]/image-[busybox]")} size="md" />
            <DnIconComponent dnParts={parseDn("root/images/repo-[dockerhub]/image-[busybox]/tag-[latest]")} size="md" />
        </div>

        <h2>Size: lg</h2>
        <div className="d-flex flex-wrap">
            <DnIconComponent dnParts={parseDn("root/logic/ns-[gitlab]")} size="lg" />
            <DnIconComponent dnParts={parseDn("root/logic/ns-[gitlab]/app-[gitlab-cert-manager-webhook]")} size="lg" />
            <DnIconComponent dnParts={parseDn("root/logic/ns-[gitlab]/app-[gitlab-cert-manager-webhook]/launcher-[Deployment]")} size="lg" />
            <DnIconComponent dnParts={parseDn("root/images/repo-[dockerhub]")} size="lg" />
            <DnIconComponent dnParts={parseDn("root/images/repo-[dockerhub]/image-[busybox]")} size="lg" />
            <DnIconComponent dnParts={parseDn("root/images/repo-[dockerhub]/image-[busybox]/tag-[latest]")} size="lg" />
        </div>

        <h2>Size: custom</h2>
        <div className="d-flex flex-wrap">
            <DnIconComponent dnParts={parseDn("root/logic/ns-[gitlab]")} size="custom" extraClassNames={styles.customSize} />
        </div>
    </div>
);
