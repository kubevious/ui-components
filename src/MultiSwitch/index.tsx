import React, { FC, useState } from 'react';
import cx from 'classnames';
import { MultiSwitchProps, OptionItem } from './types';
import { TooltipContainer } from '../TooltipContainer';

import styles from './styles.module.css';
import { Label } from '../Label';

export const MultiSwitch: FC<MultiSwitchProps> = ({ 
    items,
    initialSelection,
    onSelectedChanged,
    itemHeight,
    itemWidth,
}) => {

    const [selectedIndex, setSelectedIndex] = useState<number>(initialSelection ?? 0);

    const layers: ItemLayer[] = [];
    {
        let itemIndex = 0;
        for(let i = 0; i < items.length; i++) 
        {
            const item = items[i];
            const layer : ItemLayer = {
                layerIndex: i,
                items: [ { ...item, layerIndex: i, subIndex: 0, index: itemIndex }]
            }
            itemIndex++;

            if (item.alternatives) {
                for(let j = 0; j < item.alternatives.length; j++)
                {
                    const altItem = item.alternatives[j];
                    layer.items.push({
                        ...altItem,
                        index: itemIndex,
                        layerIndex: i,
                        subIndex: (j + 1)
                    })
                    itemIndex++;
                }
            }
            layers.push(layer);
        }
    }

    itemHeight = itemHeight ?? 40;
    itemWidth = itemWidth ?? 40;


    const padding = 10;

    const height = itemHeight + 2;
    const width = itemWidth * layers.length + 2;
    const iconSize = Math.min(itemHeight - 2*padding, itemWidth - 2*padding);

    const determineNextSelection = (layer: ItemLayer) => {

        for(let i = 0; i < layer.items.length; i++)
        {
            const item = layer.items[i];
            if (item.index === selectedIndex) {
                const newSubIndex = (item.subIndex + 1) % layer.items.length;
                const newItem = layer.items[newSubIndex];
                return newItem;
            }
        }

        return layer.items[0];
    }

    const onClick = (layer: ItemLayer) => {
        const item = determineNextSelection(layer);
        const newSelection = item.index;

        if (newSelection === selectedIndex) {
            return;
        }

        setSelectedIndex(newSelection);
        if (onSelectedChanged) {
            onSelectedChanged(item.index, item.layerIndex, item.subIndex);
        }
    }

    const renderItem = (layer: ItemLayer) => {
        
        let myItem = layer.items[0];
        let isSelected = false;
        for(const item of layer.items) {
            if (item.index === selectedIndex) {
                myItem = item;
                isSelected = true;
            }
        }

        return <div key={layer.layerIndex}
                    className={cx(styles.itemContainer, {[styles.selectedItemContainer] : isSelected})}
                    style={{ 
                        width: `${itemWidth}px`,
                        height: `${itemHeight}px`,
                        padding: `${padding}px`
                    }}
                    onClick={() => onClick(layer)} >
            <div className={styles.innerContainer}>
                {myItem.imageUrl && 
                    <div className={styles.itemImage}
                         style={{ 
                            backgroundImage: `url(${myItem.imageUrl})`,
                            width: `${iconSize}px`,
                            height: `${iconSize}px`
                        }}>
                    </div>}
                {myItem.element && myItem.element!}
                {myItem.label && 
                    <Label text={myItem.label}
                           color={isSelected ? "dark" : "light"}  />
                }             
            </div>
        </div>
    }

    const renderTooltipContents = (layer: ItemLayer) => {
        for(const item of layer.items)
        {
            if (item.index === selectedIndex) {
                if (item.tooltip) {
                    return item.tooltip;
                }
            }
        }
        return layer.items[0].tooltip ?? "";
    }
   
    return <>
        <div className={styles.container} style={{ width: `${width}px`, height: `${height}px` }} >
            {layers.map((layer, index) => {
                return <TooltipContainer key={index}
                    tooltipContentsFetcher={() => renderTooltipContents(layer)}
                    >
                        {renderItem(layer)}
                    </TooltipContainer>
            })}
        </div>
    </>
};

interface InternalItem extends OptionItem
{
    index: number;
    layerIndex: number;
    subIndex: number;
}

interface ItemLayer
{
    layerIndex: number;
    items: InternalItem[];
}



