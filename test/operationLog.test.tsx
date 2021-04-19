import { app } from '@kubevious/ui-framework';
import React from 'react';
import 'jest';

import { OperationLog } from '../src';
import { render, RenderResult } from '@testing-library/react';

const renderComponent = (): RenderResult => render(<OperationLog />);

const sharedState = app.sharedState;

sharedState.set('operation_logs', [
    {
        id: 'testId',
        message: 'test message',
        date: new Date(),
    },
]);

describe('<OperationLog />', () => {
    test('should check that the component OperationLog is rendered', async () => {
        const { findByTestId } = renderComponent();

        const operationLog = await findByTestId('operation-log');

        expect(operationLog).toBeTruthy();
    });
});
