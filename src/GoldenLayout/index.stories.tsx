import _ from 'the-lodash';
import React from 'react';
import { Story } from '@storybook/react';

import { GoldenLayout } from './';
import { GoldenWidget } from '../GoldenWidget'
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

export const WithPadding: Story = () => (
    <div style={{ background: 'red', height: '100%', boxSizing: 'border-box', padding: '20px'}}>
        <GoldenLayout windows={LAYOUT_COMPONENTS}
            >
        </GoldenLayout>
    </div>
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

const FuncWindow = () => {
    return <div>
        Func Window
    </div>
};


const LAYOUT_COMPONENTS: GoldenLayoutWindowInfo[] = [
    {
        id: 'mainComponent',
        component: TestMainWidget,
        props: { 'foo': 'bar' },
        location: GoldenLayoutLocation.main,
        title: 'MAIN',
        skipClose: true,
        allowVerticalScroll: false,
    },
    {
        id: 'funcCompComponent',
        component: GoldenWidget,
        props: { 
            content: <FuncWindow /> 
        },
        location: GoldenLayoutLocation.bottom,
        title: 'FuncProp',
        skipClose: true,
        allowVerticalScroll: false,
    },
    {
        id: 'funcCompComponentSize',
        content: <FuncWindow />,
        location: GoldenLayoutLocation.right,
        title: 'FuncProp Side',
        skipClose: true,
        allowVerticalScroll: false,
    }
]