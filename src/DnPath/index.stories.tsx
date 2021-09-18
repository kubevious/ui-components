import React from 'react';
import { Story } from '@storybook/react';
import { DnPath } from './';

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
                    dnParts={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    dnParts={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    iconSize="lg"
                    dnParts={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    dnParts={DN_PARTS_01}
                />
            </div>
        </div>

        <div style={{ width: "350px" }} >
            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    iconSize="xs"
                    dnParts={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    includeLogo={true}
                    iconSize="lg"
                    dnParts={DN_PARTS_01}
                />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnPath
                    dnParts={DN_PARTS_01}
                />
            </div>
        </div>

    </div>
);


const DN_PARTS_01 = [
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
];