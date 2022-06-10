import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { ItemList, ListItem } from './';

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

            <div style={{ background: '#222222', marginBottom: '1rem', height: '300px'}}>
                <ItemList items={ITEMS}  />
            </div>

            <div style={{ background: '#222222', marginBottom: '1rem', height: '300px' }}>
                <ItemList items={ITEMS}
                        selectedItem={{ key: 'bar' }}  />
            </div>

            <div style={{ background: '#222222', marginBottom: '1rem', height: '300px' }}>
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



export const MultilineItem: Story = () => {
    const [selectedItem, setSelectedItem] = useState<ListItem|null>(LARGE_ITEMS[3]);

    const renderItem = (line1: string, line2: string) => {
        return <>
            <div>
                <div>
                    {line1}
                </div>
                <div>
                    {line2}
                </div>
            </div>
        </>
    }
    
    const ITEMS : ListItem[] = [
        { key: 'foo', text: renderItem('foo', 'xxx') },
        { key: 'bar', text: renderItem('bar', 'xxx') },
        { key: 'foo-bar', text: renderItem('foo-bar', 'xxx') },
    ];

    return (
        <div style={{ background: '#000000', padding: '20px', color: 'white', boxSizing: 'border-box' }}>

            <div style={{ background: '#222222', boxSizing: 'border-box', height: "400px" }}>
                <ItemList items={ITEMS}
                          selectedItem={selectedItem}
                          onSelectItemChange={setSelectedItem}
                          emptyPlaceholder="No items present"   />
            </div>

        </div>
    );
}
