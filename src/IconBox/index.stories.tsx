import React from 'react';
import { Story } from '@storybook/react';
import { IconBox } from './';

export default {
    title: 'IconBox',
    component: IconBox,
};

function returnTooltipContent()
{
    return "ABCD";
}

export const Default: Story = () => (
    <div style={{ background: '#AAAAAA', padding: '1rem' }}>
        
        <div style={{ margin: '1rem', color: 'white' }}>
            <IconBox width={26} height={26} tooltipContentsFetcher={returnTooltipContent}>
                a
            </IconBox>
        </div>

        <div style={{ margin: '1rem' }}>
            <IconBox width={26} height={26} extraStyle={{ color: 'red' }}>
                b
            </IconBox>
        </div>

        <div style={{ margin: '1rem' }}>
            <IconBox width={42} height={42} >
                c
            </IconBox>
        </div>

        <div style={{ margin: '1rem', color: 'white' }}>
            <IconBox width={42} height={42} tooltipContentsFetcher={returnTooltipContent}>
                D
            </IconBox>
        </div>

        <div style={{ margin: '1rem', color: 'white' }}>
            <IconBox tooltipContentsFetcher={returnTooltipContent}>
                ABCDEFG
            </IconBox>
        </div>

    </div>
);
