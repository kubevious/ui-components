import React from 'react';
import 'jest';

import { BurgerMenu } from '../src';
import { render, RenderResult } from '@testing-library/react';

const renderComponent = (): RenderResult => render(<BurgerMenu items={[]} />);

describe('<BurgerMenu />', () => {
    test('should render burger menu', async () => {
        const { container } = renderComponent();

        expect(container).toBeTruthy();
    });
});
