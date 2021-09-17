import React from 'react';
import { Story } from '@storybook/react';
import { MarkerIcon } from './';
import { MARKER_FOO, MARKER_BAR } from '../mock/markers';

export default {
    title: 'MarkerIcon',
    component: MarkerIcon,
};

export const Default: Story = () => (
    <div style={{ background: '#AAAAAA', padding: '1rem' }}>
        <div>
            <MarkerIcon marker={MARKER_FOO} />
        </div>

        <div>
            <MarkerIcon marker={MARKER_BAR} />
        </div>

        <div >
            Default in sequence
        </div >

        <div>
            <MarkerIcon marker={MARKER_FOO} />
            <MarkerIcon marker={MARKER_BAR} />
            <MarkerIcon marker={MARKER_FOO} />
            <MarkerIcon marker={MARKER_BAR} />
        </div>

        <div >
            On separate Lines
        </div >

        <div>
            <MarkerIcon marker={MARKER_FOO} extraStyles="d-block" />
            <MarkerIcon marker={MARKER_BAR} extraStyles="d-block" />
        </div>

        <div >
            Large 
        </div >

        <div>
            <MarkerIcon marker={MARKER_FOO} size={32} />
            <MarkerIcon marker={MARKER_BAR} size={32} />
            <MarkerIcon marker={MARKER_FOO} size={32} />
            <MarkerIcon marker={MARKER_BAR} size={32} />
        </div>

        <div >
            X-Large 
        </div >

        <div>
            <MarkerIcon marker={MARKER_FOO} size={64} />
            <MarkerIcon marker={MARKER_BAR} size={64} />
            <MarkerIcon marker={MARKER_FOO} size={64} />
            <MarkerIcon marker={MARKER_BAR} size={64} />
        </div>
        
    </div>
);
