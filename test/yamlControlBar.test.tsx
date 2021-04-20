import React from 'react';
import 'jest';

import { YamlControlBar } from '../src';
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

const renderComponent = () => render(<YamlControlBar value={'test value'} beforeChange={handleBeforeChange} />);

describe('<YamlControlBar />', () => {
    test('should check that the component YamlControlBar is rendered', async () => {
        const { findByTestId } = renderComponent();

        const yamlControlBar = await findByTestId('yaml-control-bar');
        expect(yamlControlBar).toBeTruthy();
    });
});
