import React, { FC } from 'react';
import { DnListProps } from './types';
import { DnShortcutComponent } from '../DnShortcutComponent';

import styles from './styles.module.css';

export const DnList: FC<DnListProps> = ({ items }) => {

    return <div className={styles.dnListContainer}>
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
    </div>
    
};
