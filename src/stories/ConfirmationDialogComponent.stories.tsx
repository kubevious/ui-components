import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfirmationDialogComponent } from '..';

export default {
    title: 'ConfirmationDialogComponent',
    component: ConfirmationDialogComponent,
};

export const Default: Story = () => (
    <BrowserRouter>
        <div style={{ background: '#212122', padding: '1rem' }}>

            <div style={{ marginBottom: '1rem' }}>
                <ConfirmationDialogComponent params={{
                        title: "My Title 1", 
                        message: <>Are you <strong>sure</strong>?</>,  
                        cancelLabel: "Cancel",  
                        confirmLabel: "Yes!", 
                        confirmButtonType: 'danger',
                        action: () => {}
                    }}
                    onCancel={() => {}}
                    onConfirm={() => {}}
                    />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <ConfirmationDialogComponent params={{
                        title: "My Title 1", 
                        message: <>Are you <strong>sure</strong>?</>,  
                        confirmLabel: "Yes! Please",
                        action: () => {}
                    }}
                    onCancel={() => {}}
                    onConfirm={() => {}}
                    />
            </div>

        </div>
    </BrowserRouter>
);
