import { Story } from '@storybook/react';
import React from 'react';
import { ActionLink } from '../ActionLink';

export default {
    title: 'ActionLink',
    component: ActionLink
};

export const Default: Story = () => (
    <div style={{ background: 'grey' }}>

        <div style={{ marginBottom: '1rem' }}>
            <ActionLink
                onClick={() => {
                    console.error("LINK CLICKED")
                }}>
                Default Link
            </ActionLink>
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <ActionLink
                textColor="normal"
                textSize="large"
                onClick={() => {
                    console.error("LINK CLICKED")
                }}>
                Normal Large Link
            </ActionLink>
        </div>


        <div style={{ marginBottom: '1rem' }}>
            <ActionLink
                textColor="faded"
                textSize="small"
                onClick={() => {
                    console.error("LINK CLICKED")
                }}>
                Faded Small Link
            </ActionLink>
        </div>

    </div>
);
