import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfirmationDialogComponent, InnerPage } from '..';

export default {
    title: 'ConfirmationDialogComponent',
    component: ConfirmationDialogComponent,
};

export const Default: Story = () => (
    <BrowserRouter>
        <div style={{ background: '#212122', padding: '1rem', height: '100vh' }}>
            <InnerPage>
                <ConfirmationDialogComponent
                    params={{
                        title: 'Deleting Cluster?',
                        message: 'Are you sure you want to delete the cluster “name here”  ',
                        cancelLabel: 'Cancel',
                        confirmLabel: 'Yes! Delete',
                        confirmButtonType: 'danger',
                        action: () => {},
                    }}
                    onCancel={() => {}}
                    onConfirm={() => {}}
                />
            </InnerPage>
        </div>
    </BrowserRouter>
);
