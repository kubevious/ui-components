import React from 'react';
import 'jest';

import { Checkbox } from '../src';
import { render, RenderResult } from '@testing-library/react';
import { CheckboxProps } from '../src/Checkbox';

const renderComponent = (props: CheckboxProps): RenderResult => render(<Checkbox {...props} />);

describe('<Checkbox />', () => {
    test('should render checkbox', () => {
        const { container } = renderComponent({});

        expect(container).toBeTruthy();
    });

    test('should render checkbox with label', () => {
        const { getByText } = renderComponent({ label: 'Checkbox label' });

        expect(getByText('Checkbox label')).toBeTruthy();
    });
});
