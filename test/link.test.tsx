import React from 'react';
import 'jest';

import { PageLink } from '../src';
import { render } from '@testing-library/react';

function renderLink() {
    return render(<PageLink name={'Test'} path={'test'} />);
}

describe('<PageLink />', () => {
    test('Should check that the component Link is rendered', async () => {
        const { findByTestId } = renderLink();

        const link = await findByTestId('link');

        expect(link);
    });
});
