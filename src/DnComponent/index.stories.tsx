import { Story } from '@storybook/react';
import React from 'react';
import { DnComponent } from './';

export default {
    title: 'DnComponent',
    component: DnComponent,
};

export const Default: Story = () => (
    <div style={{ background: '#1e1e1e' }}>

        <div style={{ background: '#888888',  padding: '25px' }}>
            <div style={{ background: '#555555', padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[kube-system]" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/launcher-[Deployment]" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/cont-[catalogue-db]/image-[weaveworksdemos/catalogue-db]" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]/vol-[Volumes]/vol-[shell-config]/configmap-[gitlab-gitlab-shell]" />
            </div> 

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/k8s/ns-[addr]/version-[v1]/kind-[Service]/resource-[gprod-addr-main-app]" />
            </div> 
        </div>

        <div style={{ background: '#888888',  padding: '25px' }}>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic"
                             options={{ relativeTo: "root" }} />
            </div> 

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/k8s/ns-[addr]/version-[v1]/kind-[Service]/resource-[gprod-addr-main-app]"
                             options={{ relativeTo: "root/k8s/ns-[addr]/version-[v1]" }} />
            </div> 
        </div>

        <div style={{ background: '#888888',  padding: '25px' }}>
            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/k8s/ns-[addr]/version-[v1]/kind-[Service]/unknown-[gprod-addr-main-app]" />
            </div> 
            
        </div>

        <div style={{ background: '#888888',  padding: '25px' }}>
            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]/vol-[Volumes]/vol-[shell-config]/configmap-[gitlab-gitlab-shell]"
                             options={{ relativeTo: "root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]" }} />
            </div>
            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]/vol-[Volumes]/vol-[shell-config]/configmap-[gitlab-gitlab-shell]"
                             options={{ relativeTo: "root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]/vol-[Volumes]" }} />
            </div>
        </div>
 
        <div style={{ width: "350px" }} >
            <div style={{ background: '#555555', padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[kube-system]" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/launcher-[Deployment]" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/cont-[catalogue-db]/image-[weaveworksdemos/catalogue-db]" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]/vol-[Volumes]/vol-[shell-config]/configmap-[gitlab-gitlab-shell]" />
            </div>
        </div>


        <div>
            <div style={{ background: '#555555', padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[kube-system]" iconSize="xs" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/launcher-[Deployment]"  iconSize="xs" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/cont-[catalogue-db]/image-[weaveworksdemos/catalogue-db]"
                             iconSize="lg" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnComponent dn="root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]/vol-[Volumes]/vol-[shell-config]/configmap-[gitlab-gitlab-shell]"
                             iconSize="lg"/>
            </div>
        </div>
    </div>
);
