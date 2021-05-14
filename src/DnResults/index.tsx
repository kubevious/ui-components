import _ from 'the-lodash';
import React, { FC, useState } from 'react';
import { DnResultsProps, GroupInfo } from './types';
import { DnShortcutComponentProps } from '../DnShortcutComponent/types';
import { subscribeToSharedState } from '@kubevious/ui-framework';
import { DnList } from '../DnList';

export const DnResults: FC<DnResultsProps> = ({ items }) => {

    const [flatItems, setFlatItems] = useState<DnShortcutComponentProps[]>([]);
    const [itemGroups, setItemGroups] = useState<Record<string, GroupInfo>>({});

    subscribeToSharedState("clusters_dict", clusters_dict => {

        const list : DnShortcutComponentProps[] = [];
        const groups : Record<string, GroupInfo> = {};
    
        for(let item of items)
        {
            if (item.clusterId) {
                if (!groups[item.clusterId]) {
                    const clusterInfo = clusters_dict[item.clusterId];
                    const clusterName = clusterInfo ? clusterInfo.name : item.clusterId;
                    groups[item.clusterId] = {
                        id: item.clusterId,
                        name: clusterName,
                        items: []
                    }
                }
                groups[item.clusterId].items.push(item);
            } else {
                list.push(item);
            }
        }

        setFlatItems(list);
        setItemGroups(groups);

    })

    return <div>
        <div>
            <DnList items={flatItems} />
        </div>
        <div>
            { _.values(itemGroups).map((groupInfo, index) => {

                return <div>
                    <div>{groupInfo.name}</div>
                    <DnList key={index}
                            items={groupInfo.items} />
                </div>

            })}
        </div>
    </div>
    
};
