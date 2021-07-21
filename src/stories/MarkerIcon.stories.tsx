import React from 'react';
import { Story } from '@storybook/react';
import { CallbackHook } from '../';
import { MarkerIcon } from '../';
import { app } from '@kubevious/ui-framework';

export default {
    title: 'MarkerIcon',
    component: MarkerIcon,
};

export const Default: Story = () => (
    <div style={{ background: '#AAAAAA', padding: '1rem' }}>
        <CallbackHook 
            setup={() => {
                const data = {
                    'foo': { shape: 'f164', color: '#F83759' },
                    'bar': { shape: 'f134', color: '#11E7E9' }
                }
                app.sharedState.set('markers_dict', data);
            }}
            cleanup={() => {
                app.sharedState.set('markers_dict', null);
            }}
        />

        <div>
            <MarkerIcon marker="foo" />
        </div>

        <div>
            <MarkerIcon marker="bar" />
        </div>

        <div >
            Default in sequence
        </div >

        <div>
            <MarkerIcon marker="foo" />
            <MarkerIcon marker="bar" />
            <MarkerIcon marker="foo" />
            <MarkerIcon marker="bar" />
        </div>

        <div >
            On separate Lines
        </div >

        <div>
            <MarkerIcon marker="foo" extraStyles="d-block" />
            <MarkerIcon marker="bar" extraStyles="d-block" />
        </div>

        <div >
            Large 
        </div >

        <div>
            <MarkerIcon marker="foo" size={32} />
            <MarkerIcon marker="bar" size={32} />
            <MarkerIcon marker="foo" size={32} />
            <MarkerIcon marker="bar" size={32} />
        </div>

        <div >
            X-Large 
        </div >

        <div>
            <MarkerIcon marker="foo" size={64} />
            <MarkerIcon marker="bar" size={64} />
            <MarkerIcon marker="foo" size={64} />
            <MarkerIcon marker="bar" size={64} />
        </div>
        
    </div>
);
