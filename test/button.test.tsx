import React from 'react';
import 'jest';

import { Button } from '../src';
import { render, RenderResult } from '@testing-library/react';
import { ButtonProps } from '../src/Button';

const renderComponent = (props: ButtonProps): RenderResult => render(<Button {...props} />);

describe('<Button />', () => {
    test('should render success button', async () => {
        const { container } = renderComponent({ type: 'success' });

        expect(container).toHaveStyle({
            background: '#4ECD77;',
        });
    });

    test('should render danger button', async () => {
        const { container } = renderComponent({ type: 'danger' });

        expect(container).toHaveStyle({
            background: '#F34C4C;',
        });
    });

    test('should render ghost button', async () => {
        const { container } = renderComponent({ type: 'ghost' });

        expect(container).toHaveStyle({
            background: '#2F3036;',
        });
    });
});
