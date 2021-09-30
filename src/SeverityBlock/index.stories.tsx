import { Story } from '@storybook/react';
import React from 'react';
import { SeverityBlock } from './';

export default {
    title: 'SeverityBlock',
    component: SeverityBlock
};

export const Default: Story = () => {
    return <>
        <div style={{ background: '#1e1e1e', margin: '50px', padding: '50px' }}>

            <div style={{ background: '#999999', margin: '50px', padding: '50px' }}>
                <SeverityBlock errors={10} warnings={40} />
            </div>

            <div style={{ background: '#999999', margin: '50px', padding: '50px' }}>
                <SeverityBlock errors={4} />
            </div>

            <div style={{ background: '#999999', margin: '50px', padding: '50px' }}>
                <SeverityBlock warnings={15} />
            </div>

            <div style={{ background: '#999999', margin: '50px', padding: '50px' }}>
                <SeverityBlock />
            </div>

        </div>
    </>;
};
