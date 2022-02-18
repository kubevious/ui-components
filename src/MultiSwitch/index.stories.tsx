import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { SeverityIcon } from '../SeverityIcon';
import { MultiSwitch } from './';
import { MultiChoiceOption } from './types';

export default {
    title: 'MultiSwitch',
    component: MultiSwitch
};

const CHOICE_DATA_1 : MultiChoiceOption[] = [
    {
        imageUrl: '/img/menu/dashboard.svg',
        tooltip: "Options 1"
    },
    {
        element: <SeverityIcon severity="error" size={20} />,
        tooltip: "Options 2"
    },
    {
        imageUrl: '/img/menu/profile.svg',
        tooltip: "Options 3"
    },
];


const CHOICE_DATA_2 : MultiChoiceOption[] = [
    {
        imageUrl: '/img/menu/dashboard.svg',
        tooltip: "Options 1"
    },
    {
        element: <SeverityIcon severity="error" size={20} />,
        tooltip: "Options 2"
    },
    {
        element: <SeverityIcon severity="warn" size={20} />,
        tooltip: "Options 3"
    },
    {
        imageUrl: '/img/menu/profile.svg',
        tooltip: "Options 4"
    },
];

export const Default: Story = () => {
    return <>
        <div style={{ background: '#999999', margin: '50px', padding: '50px' }}>
            
            <div style={{ background: '#1e1e1e', margin: '50px', padding: '50px' }}>
                <MultiSwitch
                    items={CHOICE_DATA_1}
                    />
            </div>

            <div style={{ background: '#1e1e1e', margin: '50px', padding: '50px' }}>
                <MultiSwitch
                    items={CHOICE_DATA_2}
                    />
            </div>


            <div style={{ background: '#1e1e1e', margin: '50px', padding: '50px' }}>
                <MultiSwitch
                    items={CHOICE_DATA_1}
                    initialSelection={1}
                    />
            </div>
            
        </div>

    </>;
};


const CHOICE_MULTI_STATE_DATA : MultiChoiceOption[] = [
    {
        imageUrl: '/img/menu/dashboard.svg',
        tooltip: "Options 1"
    },
    {
        element: <SeverityIcon severity="error" />,
        tooltip: "Options 2",
        alternatives: [
            {
                element: <SeverityIcon severity="warn" />,
                tooltip: "This is the second option"
            }
        ]
    },
    {
        imageUrl: '/img/menu/markers.svg',
        tooltip: "Options 3"
    },
];


const CHOICE_DATA_COMPLEX : MultiChoiceOption[] = [
    {
        imageUrl: '/img/menu/dashboard.svg',
        label: 'Disable',
        tooltip: "Options 1"
    },
    {
        element: <SeverityIcon severity="error" size={20} />,
        label: 'Error',
        tooltip: "Options 2"
    },
    {
        imageUrl: '/img/menu/profile.svg',
        tooltip: "Options 3"
    },
];


export const ChangeHandler: Story = () => {
    const [index, setIndex] = useState<number>(1);

    return <>
        <div style={{ background: '#999999', margin: '50px', padding: '50px' }}>
            
            <div style={{ background: '#1e1e1e', margin: '50px', padding: '50px' }}>
                <MultiSwitch
                    items={CHOICE_DATA_1}
                    initialSelection={index}
                    onSelectedChanged={(index) => { setIndex(index); }}
                    />
            </div>

            <div style={{ background: '#1e1e1e', margin: '50px', padding: '50px', color: 'white' }}>
                {index}
            </div>

        </div>

    </>;
};


export const MultiStage: Story = () => {
    const [index, setIndex] = useState<number>(1);
    const [layerIndex, setLayerIndex] = useState<number>(1);
    const [subIndex, setSubIndex] = useState<number>(1);

    return <>
        <div style={{ background: '#999999', margin: '50px', padding: '50px' }}>
            
            <div style={{ background: '#1e1e1e', margin: '50px', padding: '50px' }}>
                <MultiSwitch
                    items={CHOICE_MULTI_STATE_DATA}
                    initialSelection={index}
                    onSelectedChanged={(a, b, c) => { setIndex(a); setLayerIndex(b); setSubIndex(c) }}
                    />
            </div>

            <div style={{ background: '#1e1e1e', margin: '50px', padding: '50px', color: 'white' }}>
                {index} / {layerIndex} / {subIndex}
            </div>

        </div>

    </>;
};



export const Large: Story = () => {
    return <>
        <div style={{ background: '#999999', margin: '50px', padding: '50px' }}>
            
            <div style={{ background: '#1e1e1e', margin: '50px', padding: '50px' }}>
                <MultiSwitch itemWidth={120}
                             items={CHOICE_DATA_COMPLEX}
                             />
            </div>
            
        </div>

    </>;
};

