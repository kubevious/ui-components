import React from 'react';
import { Story } from '@storybook/react';
import { DnPath } from './';
import { Dn, NodeKind } from '@kubevious/entity-meta';

export default {
    title: 'DnPath',
    component: DnPath
};

export const Default: Story = () => (
    <div style={{ background: '#1e1e1e' }}>

        <div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    iconSize="xs"
                    dn={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    dnPathIndex={1}
                    iconSize="xs"
                    dn={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    dnPathIndex={2}
                    iconSize="xs"
                    dn={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    dnPathIndex={3}
                    iconSize="xs"
                    dn={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    dn={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    iconSize="lg"
                    dn={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    dn={DN_PARTS_01}
                />
            </div>
        </div>

        <div style={{ width: "350px" }} >
            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    iconSize="xs"
                    dn={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    iconSize="lg"
                    dn={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    dn={DN_PARTS_01}
                />
            </div>
        </div>

    </div>
);


const DN_PARTS_01 : Dn = [
    {
        rn: 'ns-[gitlab]',
        kind: NodeKind.ns,
        name: 'gitlab',
    },
    {
        rn: 'app-[gitlab-gitlab-exporter]',
        kind: NodeKind.app,
        name: 'gitlab-gitlab-exporter',
    },
    {
        rn: 'initcont-[configure]',
        kind: NodeKind.initcont,
        name: 'configure',
    },
];