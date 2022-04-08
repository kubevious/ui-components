import { Story } from '@storybook/react';
import React from 'react';
import { Popup } from '../';

export default {
    title: 'Popup',
    component: Popup,
};

export const Default: Story = () => (
    <Popup popupContent={<div style={{ height: '100px', background: 'red' }}>Popup content</div>} 
           closePopup={() => console.log('---')} />
);


export const LargeContent: Story = () => (
    <Popup popupContent={<div style={{ height: '2000px', background: 'yellow' }}>Popup content</div>} 
           closePopup={() => console.log('---')} />
);
