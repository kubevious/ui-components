import React from 'react';
import 'jest';

import { CodeControl } from '../src';
import { render } from '@testing-library/react';

document.createRange = () => {
    const range = new Range();

    range.getBoundingClientRect = jest.fn();

    // @ts-ignore
    range.getClientRects = jest.fn(() => ({
        item: () => null,
        length: 0,
    }));

    return range;
};

const handleChange = jest.fn();

const renderComponent = () => render(<CodeControl value={'test value'} syntax='javascript' handleChange={handleChange} />);

describe('<CodeControl />', () => {
    test('should check that the component CodeControl is rendered', async () => {
        const { findByTestId } = renderComponent();

        const yamlControlBar = await findByTestId('code-control-bar');
        expect(yamlControlBar).toBeTruthy();
    });
});
