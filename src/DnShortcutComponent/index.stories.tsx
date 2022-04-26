import { Story } from '@storybook/react';
import React from 'react';
import { DnShortcutComponent } from './';
import { MARKER_FOO, MARKER_BAR } from '../mock/markers';

export default {
    title: 'DnShortcutComponent',
    component: DnShortcutComponent
};

export const Default: Story = () => (
    <div style={{ background: '#1e1e1e', color: 'white' }}>

        <div>
            <div style={{ background: '#555555', padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[kube-system]" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/launcher-[Deployment]" errors={4} />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/cont-[catalogue-db]/image-[weaveworksdemos/catalogue-db]" warnings={10} />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]/vol-[Volumes]/vol-[shell-config]/configmap-[gitlab-gitlab-shell]" errors={5} warnings={33} />
            </div>


            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]/vol-[Volumes]/vol-[shell-config]/configmap-[gitlab-gitlab-shell]"
                                     errors={5} warnings={33}
                                     markers={[MARKER_FOO, MARKER_BAR]}
                                     flags={['radioactive']}
                                     />
            </div>
            
        </div>

        <div style={{ width: "350px" }} >
            <div style={{ background: '#555555', padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[kube-system]" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/launcher-[Deployment]" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/cont-[catalogue-db]/image-[weaveworksdemos/catalogue-db]" />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]/vol-[Volumes]/vol-[shell-config]/configmap-[gitlab-gitlab-shell]"  errors={523} warnings={33} />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[gitlab]/app-[gitlab-gitlab-shell]/vol-[Volumes]/vol-[shell-config]/configmap-[gitlab-gitlab-shell]"
                                     errors={5} warnings={33}
                                     markers={[MARKER_FOO, MARKER_BAR]}
                                     />
            </div>
        </div>
        
        <div style={{ width: "550px" }} >
            <h3>options.onlyRn</h3>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[kube-system]"
                                     options={{ onlyRn: true }}     />
            </div>

            <div style={{ background: '#555555', padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[kube-system]"
                                     options={{ onlyRn: true, onlyRnOverrideName: 'bar' }}     />
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/launcher-[Deployment]" 
                                     options={{ onlyRn: true }}/>
            </div>

            <div style={{ background: '#555555',  padding: '25px' }}>
                <DnShortcutComponent dn="root/logic/ns-[sock-shop]/app-[catalogue-db]/launcher-[Deployment]" 
                                     options={{ onlyRn: true, onlyRnOverrideName: 'foo' }}/>
            </div>

        </div>
    </div>
);
