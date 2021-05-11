import { Story } from '@storybook/react';
import React from 'react';
import { Popup } from '../Popup';

export default {
    title: 'Popup',
    component: Popup,
};

export const Default: Story = () => (
    <Popup popupContent={<div style={{ height: '100vh' }}>Popup content</div>} closePopup={() => console.log('---')} />
);
