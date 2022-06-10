import React, { FC, ReactNode, useState } from 'react';
import cx from 'classnames';

import styles from './styles.module.css';
import { ItemList, ListItem } from '../ItemList';


export interface ItemDetailsListProps {
    items?: ListItem[] | null;
    emptyListPlaceholder?: ReactNode;

    classNameItemContainer?: string;
    classNameSelectedItemContainer?: string;
    classNameListContainer?: string;

    onRenderDetails?: (item: ListItem|null) => ReactNode;
}

export const ItemDetailsList: FC<ItemDetailsListProps> = ({ 
    items,
    emptyListPlaceholder,

    classNameItemContainer,
    classNameSelectedItemContainer,
    classNameListContainer,

    onRenderDetails

}) => {

    const [selectedItem, setSelectedItem] = useState<ListItem|null>(null);

    const onSelect = (item: ListItem | null) => {
        setSelectedItem(item);
    }

    return (
        <div className={styles.mainContainer}>

            <div className={cx(styles.listContainer, classNameListContainer)}>

                <ItemList items={items}
                          emptyPlaceholder={emptyListPlaceholder}
                          selectedItem={selectedItem}
                          onSelectItemChange={onSelect}
                          classNameItemContainer={classNameItemContainer}
                          classNameSelectedItemContainer={cx(styles.selectedItemContainer, classNameSelectedItemContainer)}
                          
                          />

            </div>

            <div className={styles.detailsContainer}>

                {onRenderDetails && onRenderDetails(selectedItem)}

            </div>

        </div>
    );
}
