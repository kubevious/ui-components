import { Story } from '@storybook/react';
import React from 'react';
import { ToggleButton } from '../';

export default {
    title: 'ToggleButton',
    component: ToggleButton
};

export const Default: Story = () => (
    <div style={{ background: '#222222' }}>

        <div style={{ marginBottom: '1rem' }}>
            <ToggleButton>
                I am not selected
            </ToggleButton>
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <ToggleButton isSelected={true}>
                I am selected
            </ToggleButton>
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <ToggleButton>
                One
            </ToggleButton>

            <ToggleButton isSelected={true}>
                Two
            </ToggleButton>

            <ToggleButton>
                Three
            </ToggleButton>
        </div>

    </div>
);
