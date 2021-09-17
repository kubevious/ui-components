import React from 'react';
import { Story } from '@storybook/react';
import { DnLink } from './';

export default {
    title: 'DnLink',
    component: DnLink,
};

export const Default: Story = () => (
    <div style={{ background: '#1e1e1e', color: 'white' }}>

        <div style={{ background: '#0e0e0e'  }} >
            <div style={{ margin: '1em' }}>
                <DnLink dn="root/ns-[berlioz]/app-[gprod-berlioz-main-agent]/cont-[gprod-berlioz-main-agent]/image-[berliozcloud/agent]" />
            </div>

            <div style={{ margin: '1em' }}>
                <DnLink dn="root/ns-[berlioz]/app-[gprod-berlioz-main-agent]/cont-[gprod-berlioz-main-agent]/vol-[google-cloud-key]/secret-[gprod-berlioz-main-agent]	" />
            </div>

            <div style={{ margin: '1em' }}>
                <DnLink dn="root/ns-[berlioz]/raw-[Raw Configs]" />
            </div>

            <div style={{ margin: '1em' }}>
                <DnLink dn="root/ns-[berlioz]/raw-[Raw Configs]" size='md' />
            </div>

            <div style={{ margin: '1em' }}>
                <DnLink dn="root/ns-[berlioz]/raw-[Raw Configs]" size='lg' />
            </div>
        </div>

        <div style={{ background: '#0e0e0e', width: "350px" }} >
            <div style={{ margin: '1em' }}>
                <DnLink dn="root/ns-[berlioz]/app-[gprod-berlioz-main-agent]/cont-[gprod-berlioz-main-agent]/image-[berliozcloud/agent]" />
            </div>

            <div style={{ margin: '1em' }}>
                <DnLink dn="root/ns-[berlioz]/app-[gprod-berlioz-main-agent]/cont-[gprod-berlioz-main-agent]/vol-[google-cloud-key]/secret-[gprod-berlioz-main-agent]	" />
            </div>

            <div style={{ margin: '1em' }}>
                <DnLink dn="root/ns-[berlioz]/raw-[Raw Configs]" />
            </div>

            <div style={{ margin: '1em' }}>
                <DnLink dn="root/ns-[berlioz]/raw-[Raw Configs]" size='md' />
            </div>

            <div style={{ margin: '1em' }}>
                <DnLink dn="root/ns-[berlioz]/raw-[Raw Configs]" size='lg' />
            </div>
        </div>

    </div>
);
