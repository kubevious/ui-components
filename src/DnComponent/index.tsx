import React, { FC, Fragment } from 'react';
import _ from 'the-lodash';
import * as DnUtils from '@kubevious/helpers/dist/dn-utils';
import { DnPath } from '../DnPath';
import { DnComponentProps } from './types';

export const DnComponent: FC<DnComponentProps> = ({ dn, iconSize, options }) => {
    const opt = options || {};

    let dnParts = DnUtils.parseDn(dn);

    if (opt.relativeTo) {
        const parentDnParts = DnUtils.parseDn(opt.relativeTo);
        while (dnParts.length > 0 && parentDnParts.length > 0 && dnParts[0].rn === parentDnParts[0].rn) {
            dnParts.shift();
            parentDnParts.shift();
        }
    }

    if (dnParts.length > 0 && dnParts[0].kind === 'root') {
        dnParts = dnParts.splice(1);
    }

    return <>
        <DnPath dnParts={dnParts} 
                includeLogo={true}
                iconSize={iconSize ?? 'md' } />
    </>
};

export default DnComponent;
