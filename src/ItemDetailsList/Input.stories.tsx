import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { ItemDetailsList } from './';
import { ListItem } from '../ItemList';

import styles from './styles-story.module.css';

export default {
    title: 'ItemDetailsList',
    component: ItemDetailsList,
};

const ITEMS : ListItem[] = [
    { key: 'foo', text: 'foo' },
    { key: 'bar', text: 'bar' },
    { key: 'foo-bar', text: 'foo-bar' },
]


const LARGE_ITEMS : ListItem[] = [
];
for(let i=0; i < 100; i++) {
    LARGE_ITEMS.push({ key: `foo-${i}`, text: `foo-${i}` });
}

export const Default: Story = () => {

    const renderDetails = (item: ListItem|null) => {
        if (!item) {
            return <>
                No Item Selected
            </>
        }
        return <>
            <div>
                {JSON.stringify(item)};
            </div>
        </>
    }

    return (
        <div style={{ background: '#000000', padding: '1rem', color: 'white', height: '100%' }}>

            <div style={{ background: '#222222', marginBottom: '1rem', height: '100%' }}>
                <ItemDetailsList items={ITEMS} onRenderDetails={renderDetails} />
            </div>

        </div>
    );
}


export const LargeList: Story = () => {

    return (
        <div style={{ background: '#000000', padding: '20px', color: 'white', boxSizing: 'border-box' }}>

            <div style={{ background: '#222222', boxSizing: 'border-box', height: "400px" }}>
                <ItemDetailsList items={LARGE_ITEMS}
                                 emptyListPlaceholder="No items present"   />
            </div>

        </div>
    );
}


export const ListCustomStyle: Story = () => {

    const renderDetails = (item: ListItem|null) => {
        if (!item) {
            return <>
                No Item Selected
            </>
        }
        return <>
            <div>
                {JSON.stringify(item)};
            </div>
        </>
    }

    return (
        <div style={{ background: '#000000', padding: '1rem', color: 'white', height: '100%' }}>

            <div style={{ background: '#222222', marginBottom: '1rem', height: '100%' }}>
                <ItemDetailsList items={ITEMS}
                                 onRenderDetails={renderDetails}
                                 classNameListContainer={styles.listContainerDetails}
                                 />
            </div>

        </div>
    );

}

