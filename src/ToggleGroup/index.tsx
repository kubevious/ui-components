import _ from 'the-lodash';
import React, { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.css'
import { ToggleButton } from '..';

export interface ToggleGroupProps {
    items: any[],
    selectedItem?: any;
    onSelectionChange?: (item: any) => any;
    extraStyles?: string | string[] | { [key: string]: any };
    extraButtonStyles?: string | string[] | { [key: string]: any };
}

export const ToggleGroup: FC<ToggleGroupProps> = ({ items, selectedItem, onSelectionChange, extraStyles, extraButtonStyles }) => {
   
    return <>
        <div
            className={cx(styles.container, extraStyles)}
        >
            {items && items.map(item => {
                return <>
                    <ToggleButton
                        isSelected={item === selectedItem}
                        onClick={() => {
                            if (onSelectionChange) {
                                onSelectionChange(item);
                            }
                        }}
                        extraStyles={extraButtonStyles}
                        >
                        {item}
                    </ToggleButton>
                </>
            })}
        </div>
    </>;
};