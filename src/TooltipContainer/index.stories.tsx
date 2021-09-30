import React from 'react';
import { Story } from '@storybook/react';
import { TooltipContainer } from './';

export default {
    title: 'TooltipContainer',
    component: TooltipContainer,
};

function returnTooltipContent()
{
    return "ABCD";
}

export const Default: Story = () => (
    <div style={{ background: '#AAAAAA', padding: '1rem' }}>
        
        <div style={{ margin: '1rem', color: 'white' }}>
            <TooltipContainer tooltipContentsFetcher={returnTooltipContent}
                contents={
                    <div style={{ background: 'blue' }} >
                        hello world
                    </div>
                }
                >
            </TooltipContainer>
        </div>

    </div>
);
