import React, { FC } from 'react';
import _ from 'the-lodash';
import { DnPath } from '../DnPath';
import { DnComponentProps } from './types';
import { parseDn } from '@kubevious/entity-meta'

export const DnComponent: FC<DnComponentProps> = ({ dn, iconSize, options }) => {
    const opt = options || {};

    const dnParts = parseDn(dn);

    let dnPathIndex = 0;
    if (opt.relativeTo) {
        const parentDnParts = parseDn(opt.relativeTo);
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