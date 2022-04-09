import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { ItemList } from './';
import { ListItem } from './types';

export default {
    title: 'ItemList',
    component: ItemList,
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
    const [selectedItem, setSelectedItem] = useState<ListItem|null>(null);

    return (
        <div style={{ background: '#000000', padding: '1rem', color: 'white' }}>

            <div style={{ background: '#222222', marginBottom: '1rem' }}>
                <ItemList items={ITEMS}  />
            </div>

            <div style={{ background: '#222222', marginBottom: '1rem' }}>
                <ItemList items={ITEMS}
                        selectedItem={{ key: 'bar' }}  />
            </div>

            <div style={{ background: '#222222', marginBottom: '1rem' }}>
                <ItemList items={ITEMS}
                          selectedItem={selectedItem}
                          onSelectItemChange={setSelectedItem}  />
            </div>


            <div style={{ background: '#222222', marginBottom: '1rem', height: "200px" }}>
                <ItemList items={[]}
                          emptyPlaceholder="No items present"   />
            </div>

        </div>
    );
}


export const LargeList: Story = () => {
    const [selectedItem, setSelectedItem] = useState<ListItem|null>(LARGE_ITEMS[3]);

    return (
        <div style={{ background: '#000000', padding: '20px', color: 'white', boxSizing: 'border-box' }}>

            <div style={{ background: '#222222', boxSizing: 'border-box', height: "400px" }}>
                <ItemList items={LARGE_ITEMS}
                          selectedItem={selectedItem}
                          onSelectItemChange={setSelectedItem}
                          emptyPlaceholder="No items present"   />
            </div>

        </div>
    );
}
