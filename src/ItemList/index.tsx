import React, { FC, ReactNode } from 'react';
import cx from 'classnames';
import { ScrollbarComponent } from '../ScrollbarComponent';

import styles from './styles.module.css';

export interface ListItem {
    key: string;
    text?: ReactNode;
};

export interface ItemListProps {
    items?: ListItem[] | null;
    selectedItem?: ListItem | null;
    onSelectItemChange?: (item: ListItem | null) => void;
    emptyPlaceholder?: ReactNode;

    classNameItemContainer?: string;
    classNameSelectedItemContainer?: string;
};

export const ItemList: FC<ItemListProps> = ({ 
    items,
    selectedItem,
    onSelectItemChange,
    emptyPlaceholder,

    classNameItemContainer,
    classNameSelectedItemContainer,

}) => {

    const selectedItemKey = selectedItem?.key ?? null;

    const onSelect = (item: ListItem) => {
        if (onSelectItemChange) {
            onSelectItemChange(item);
        }
    }

    if (!items) {
        return <></>;
    }

    if (items.length == 0) {
        return <div className={styles.noItemsLabel}>
            {emptyPlaceholder}
        </div>
    }

    return (
        <ScrollbarComponent>
            <div className={cx(styles.listContainer)}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={cx(styles.itemContainer,
                            classNameItemContainer, {
                            [styles.selectedItemContainer]: item.key === selectedItemKey,
                            [classNameSelectedItemContainer ?? '']: (item.key === selectedItemKey),
                        })}
                        onClick={() => onSelect(item)}
                    >
                        <div className={styles.item}>
                            {item.text}
                        </div>
                    </div>
                ))}

            </div>
        </ScrollbarComponent>
    );
}
