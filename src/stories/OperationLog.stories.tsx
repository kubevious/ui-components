import { app } from '@kubevious/ui-framework';
import { Story } from '@storybook/react';
import React from 'react';
import { OperationLog } from '../OperationLog';

export default {
    title: 'OperationLog',
};

const sharedState = app.sharedState;

sharedState.set('operation_logs', [
    {
        id: 'testId1',
        message: 'test message 1',
        date: new Date(),
    },
    {
        id: 'testId1',
        message: 'test message 2',
        date: new Date(),
    },
]);

export const Default: Story = () => (
    <div>
        <OperationLog />
    </div>
);
