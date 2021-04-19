import { Story } from '@storybook/react';
import React from 'react';
import ErrorBox from '../ErrorBox';

export default {
    title: 'ErrorBox',
};

const error = {
    data: {
        message: 'message',
        stack: 'stack',
    },
    status: 400,
};

const closeError = () => {};

export const Default: Story = () => (
    <div>
        <ErrorBox error={error} closeError={closeError} />
    </div>
);
