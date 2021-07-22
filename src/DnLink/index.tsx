import React, { FC, Fragment } from 'react';
import _ from 'the-lodash';
import { RnInfo } from '@kubevious/helpers/dist/dn-utils';
import { DnIconComponent } from '../DnIconComponent';
import * as DnUtils from '@kubevious/helpers/dist/dn-utils';
import { app } from '@kubevious/ui-framework';

import DnPath from '../DnPath';

import styles from './styles.module.css';
import { IconSize } from '../DnIconComponent/types';

export interface DnLinkProps {
    dn: string;
    size?: IconSize;
}

export const DnLink: FC<DnLinkProps> = ({ dn, size = 'xs' }) => {
    const dnParts = DnUtils.parseDn(dn).slice(1);
    const kind = dnParts.length ? dnParts[dnParts.length - 1].kind : '';

    return (
        <div className={styles.dnContainer} key={dn} onClick={() => clickDn(dn)}>
            <div className={styles.logoContainer}>
                <DnIconComponent kind={kind} size={size} />
            </div>
            <div className={styles.partsContainer}>
                <DnPath dnParts={dnParts} />
            </div>
        </div>
    );
};

function clickDn(dn: string) 
{
    app.sharedState.set('selected_dn', dn);
    app.sharedState.set('auto_pan_to_selected_dn', true);
}
