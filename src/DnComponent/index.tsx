import React, { FC } from 'react';
import _ from 'the-lodash';
import { DnPath } from '../DnPath';
import { parseDn } from '@kubevious/entity-meta'
import { IconSize } from "../DnIconComponent/types";

export interface DnComponentOptions {
    onlyRn?: boolean;
    onlyRnOverrideName?: string;
    relativeTo?: string;
}

export interface DnComponentProps {
    dn: string;
    iconSize?: IconSize;
    options?: DnComponentOptions;
}

export const DnComponent: FC<DnComponentProps> = ({ dn, iconSize, options }) => {
    options = options || {};

    const dnParts = parseDn(dn);

    let dnPathIndex = 1;
    if (options.onlyRn) {
        dnPathIndex = dnParts.length - 1;
        if (_.isNotNullOrUndefined(options.onlyRnOverrideName)) {
            dnParts[dnPathIndex]!.name = options.onlyRnOverrideName!;
        }
    } else if (options.relativeTo) {
        const parentDnParts = parseDn(options.relativeTo);
        for(let i = 0; (i < Math.min(dnParts.length, parentDnParts.length)) && (dnParts[i].rn === parentDnParts[i].rn); i++)
        {
            dnPathIndex = i + 1;
        }
    }

    return <>
        <DnPath dn={dnParts} 
                dnPathIndex={dnPathIndex}
                includeLogo={true}
                iconSize={iconSize ?? 'md' } />
    </>
};