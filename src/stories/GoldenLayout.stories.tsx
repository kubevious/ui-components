import _ from 'the-lodash';
import React from 'react';
import { Story } from '@storybook/react';

import { GoldenLayout } from '../';
import {
    GoldenLayoutWindowInfo,
    GoldenLayoutLocation,
} from '../GoldenLayout/types';
import { ClassComponent } from '@kubevious/ui-framework';

export default {
    title: 'GoldenLayout',
};

export const Default: Story = () => (
    <GoldenLayout windows={LAYOUT_COMPONENTS}
         >

    </GoldenLayout>
);


class TestMainWidget extends ClassComponent<{}, {}> {
    render() {
        return (
            <div>
                My Main Content
                <div>
                    <pre>
                        { JSON.stringify(_.keys(this.props), null, 4) }
                    </pre>
                </div>
            </div>
        );
    }
}


const LAYOUT_COMPONENTS: GoldenLayoutWindowInfo[] = [
    {
        id: 'mainComponent',
        component: TestMainWidget,
        props: { 'foo': 'bar' },
        location: GoldenLayoutLocation.main,
        title: 'MAIN',
        skipClose: true,
        allowVerticalScroll: false,
    }
]