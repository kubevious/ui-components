import React from 'react';
import 'jest';

import { SideMenu } from '../src';
import { render, RenderResult } from '@testing-library/react';
import { SideMenuProps } from '../src/SideMenu';

const renderComponent = (props: SideMenuProps): RenderResult => render(<SideMenu {...props} />);

describe('<SideMenu />', () => {
    test('should render side menu', () => {
        const { container } = renderComponent({ sections: [], footer: [] });

        expect(container).toBeTruthy();
    });
});
