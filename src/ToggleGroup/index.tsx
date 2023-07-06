import _ from 'the-lodash';
import React, { ReactElement, PropsWithChildren } from 'react';
import cx from 'classnames';

import styles from './styles.module.css'
import { ToggleButton } from '../ToggleButton';

export interface ToggleGroupProps<T> {
    items: T[],
    selectedItem?: T;
    onSelectionChange?: (item: T) => any;
    extraStyles?: string | string[] | { [key: string]: any };
    extraButtonStyles?: string | string[] | { [key: string]: any };
}


export const ToggleGroup = <T,>({ items, selectedItem, onSelectionChange, extraStyles, extraButtonStyles } : PropsWithChildren<ToggleGroupProps<T>>) : ReactElement =>
{
    return <>
        <div
            className={cx(styles.container, extraStyles)}
        >
            {items && items.map((item, index) => {
                return <ToggleButton key={index}
                    isSelected={item === selectedItem}
                    onClick={() => {
                        if (onSelectionChange) {
                            onSelectionChange(item);
                        }
                    }}
                    extraStyles={extraButtonStyles}
                    >
                    {item as any}
                </ToggleButton>
            })}
        </div>
    </>;
};