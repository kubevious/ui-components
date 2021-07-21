import { useState } from 'react' ;
import { Story } from '@storybook/react';
import React from 'react';
import { ToggleGroup } from '../';

export default {
    title: 'ToggleGroup',
    component: ToggleGroup
};

export const Default: Story = () => {
    const [item, setItem ] = useState<string>(ITEMS[0]);

    const onChange = (newItem) => {
        setItem(newItem);
    }

    return <>
        <div style={{ background: '#222222' }}>

            <div style={{ marginBottom: '1rem' }}>
                <ToggleGroup items={ITEMS} selectedItem={item} onSelectionChange={onChange}>
                </ToggleGroup>
            </div>


        </div>
    </>;

}


const ITEMS: string[] = [
    'foo',
    'bar',
    'dog',
    'cat'
]