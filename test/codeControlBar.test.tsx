import React from 'react';
import 'jest';

import { CodeControlBar } from '../src';
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

const handleBeforeChange = jest.fn();

const renderComponent = () => render(<CodeControlBar value={'test value'} beforeChange={handleBeforeChange} />);

describe('<CodeControlBar />', () => {
    test('should check that the component CodeControlBar is rendered', async () => {
        const { findByTestId } = renderComponent();

        const yamlControlBar = await findByTestId('code-control-bar');
        expect(yamlControlBar).toBeTruthy();
    });
});
