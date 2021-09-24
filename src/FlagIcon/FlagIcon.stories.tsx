import React from 'react';
import { Story } from '@storybook/react';
import { FlagIcon } from './';

export default {
    title: 'FlagIcon',
    component: FlagIcon,
};

export const Default: Story = () => (
    <div style={{ background: '#AAAAAA', padding: '1rem' }}>

        <div>
            <FlagIcon flag="radioactive" />
        </div>

        <div>
            <FlagIcon flag="shared" />
        </div>

        <div >
            Default in sequence
        </div >

        <div>
            <FlagIcon flag="radioactive" />
            <FlagIcon flag="shared" />
            <FlagIcon flag="xnamespace" />
        </div>


        <div >
            XLarge in sequence
        </div >

        <div>
            <FlagIcon flag="radioactive" size={64} />
            <FlagIcon flag="shared" size={64} />
            <FlagIcon flag="xnamespace" size={64} />
        </div>

    </div>
);
