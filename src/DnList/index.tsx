import React, { FC } from 'react';
import { DnListProps } from './types';
import { DnShortcutComponent } from '../DnShortcutComponent';

export const DnList: FC<DnListProps> = ({ items }) => {

    return <>
        {items && items.map((item, index) => 
            <DnShortcutComponent
                key={index}
                dn={item.dn}
                clusterId={item.clusterId}
                errors={item.errors}
                warnings={item.warnings}
                markers={item.markers}
                options={item.options}
            />
        )}
    </>
    
};
