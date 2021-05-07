import React from 'react';
import 'jest';
import { BrowserRouter } from 'react-router-dom';

import { PageLink } from '../src';
import { render, RenderResult } from '@testing-library/react';

const renderComponent = (): RenderResult =>
    render(
        <BrowserRouter>
            <PageLink name={'Test'} path={'test'} />
        </BrowserRouter>,
    );

describe('<PageLink />', () => {
    test('should check that the component Link is rendered', () => {
        const { findByTestId } = renderComponent();

        const link = findByTestId('link');

        expect(link);
    });
});
