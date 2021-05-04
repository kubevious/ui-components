import React from 'react';
import 'jest';

import { PageHeader } from '../src';
import { render, RenderResult } from '@testing-library/react';
import { PageHeaderProps } from '../src/PageHeader';

const renderComponent = (props: PageHeaderProps): RenderResult => render(<PageHeader {...props} />);

describe('<PageHeader />', () => {
    test('should render PageHeader', async () => {
        const { getByText } = renderComponent({ title: 'Page Header' });

        expect(getByText('Page Header')).toBeTruthy();
    });
});
