import React from 'react';
import 'jest';
import userEvent from '@testing-library/user-event';

import { Input } from '../src';
import { render, RenderResult } from '@testing-library/react';
import { InputProps } from '../src/Input';

const renderComponent = (props: InputProps): RenderResult => render(<Input {...props} />);

describe('<Input />', () => {
    test('should render input', async () => {
        const { container } = renderComponent({});

        expect(container).toBeTruthy();
    });

    test('should render input with label', async () => {
        const { container, getByText } = renderComponent({ label: 'Input Label' });

        expect(container).toBeTruthy();

        expect(getByText('Input Label')).toBeTruthy();
    });

    test('should be able to type data into input', async () => {
        const { container } = renderComponent({});

        const input = container.querySelector('input') as HTMLElement;

        userEvent.type(input, 'Some text...');

        expect(input).toHaveValue('Some text...');
    });
});
