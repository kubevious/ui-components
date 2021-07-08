import _ from 'the-lodash';
import React, { FC, useState, useEffect } from 'react';
import { DnResultGroup } from '../DnResultGroup';
import { DnResultsProps, GroupInfo } from './types';
import { DnShortcutComponentProps } from '../DnShortcutComponent/types';
import { subscribeToSharedState } from '@kubevious/ui-framework';
import { DnList } from '../DnList';

export const DnResults: FC<DnResultsProps> = ({ items }) => {
    const [flatItems, setFlatItems] = useState<DnShortcutComponentProps[]>([]);
    const [itemGroups, setItemGroups] = useState<Record<string, GroupInfo>>({});
    const [clustersDict, setClustersDict] = useState<Record<string, ClusterInfo>>({});

    subscribeToSharedState('clusters_dict', (clusters_dict) => {
        setClustersDict(clusters_dict || {});
    });

    useEffect(() => {
        const list: DnShortcutComponentProps[] = [];
        const groups: Record<string, GroupInfo> = {};

        for (const item of items) {
            const clusterId = item.clusterId;
            if (clusterId) {
                if (!groups[clusterId]) {
                    const clusterInfo = clustersDict[clusterId];
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
    }, [clustersDict, items])

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

interface ClusterInfo
{
    name: string
}