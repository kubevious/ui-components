import React from 'react';
import 'jest';
import userEvent from '@testing-library/user-event';

import { Textarea } from '../src';
import { render, RenderResult } from '@testing-library/react';
import { TextareaProps } from '../src/Textarea';

const renderComponent = (props: TextareaProps): RenderResult => render(<Textarea {...props} />);

describe('<Textarea />', () => {
    test('should render textarea', async () => {
        const { container } = renderComponent({});

        expect(container).toBeTruthy();
    });

    test('should render textarea with label', async () => {
        const { container, getByText } = renderComponent({ label: 'Textarea Label' });

        expect(container).toBeTruthy();

        expect(getByText('Textarea Label')).toBeTruthy();
    });

    test('should be able to type data into textarea', async () => {
        const { container } = renderComponent({});

        const input = container.querySelector('textarea') as HTMLElement;

        userEvent.type(input, 'Some text in textarea...');

        expect(input).toHaveValue('Some text in textarea...');
    });
});
