import _ from 'the-lodash';
import React, { FC, useState } from 'react';
import { DnResultGroup } from '../DnResultGroup';
import { DnResultsProps, GroupInfo } from './types';
import { DnShortcutComponentProps } from '../DnShortcutComponent/types';
import { subscribeToSharedState } from '@kubevious/ui-framework';
import { DnList } from '../DnList';

export const DnResults: FC<DnResultsProps> = ({ items }) => {
    const [flatItems, setFlatItems] = useState<DnShortcutComponentProps[]>([]);
    const [itemGroups, setItemGroups] = useState<Record<string, GroupInfo>>({});

    subscribeToSharedState('clusters_dict', (clusters_dict) => {
        const list: DnShortcutComponentProps[] = [];
        const groups: Record<string, GroupInfo> = {};

        for (const item of items) {
            const clusterId = item.clusterId;
            if (clusterId) {
                if (!groups[clusterId]) {
                    const clusterInfo = clusters_dict && clusters_dict[clusterId];
                    const clusterName = clusterInfo ? clusterInfo.name : clusterId;
                    groups[clusterId] = {
                        id: clusterId,
                        name: clusterName,
                        items: [],
                    };
                }
                groups[clusterId].items.push(item);
            } else {
                list.push(item);
            }
        }

        setFlatItems(list);
        setItemGroups(groups);
    });

    return (
        <div>
            <div>
                <DnList items={flatItems} />
            </div>

            <div>
                {_.values(itemGroups).map((groupInfo, index) => (
                    <DnResultGroup key={index} groupInfo={groupInfo} />
                ))}
            </div>
        </div>
    );
};
