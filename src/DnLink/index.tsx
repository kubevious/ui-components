import React, { FC } from 'react';
import _ from 'the-lodash';
import { app } from '@kubevious/ui-framework';

import styles from './styles.module.css';
import { IconSize } from '../DnIconComponent/types';
import { DnComponent } from '..';

export interface DnLinkProps {
    dn: string;
    size?: IconSize;
}

export const DnLink: FC<DnLinkProps> = ({ dn, size = 'xs' }) => {

    return <>
        <div className={styles.dnContainer} key={dn} onClick={() => clickDn(dn)}>
            <DnComponent dn={dn} iconSize={size} />
        </div>
    </>;
};

function clickDn(dn: string) 
{
    app.sharedState.set('selected_dn', dn);
    app.sharedState.set('auto_pan_to_selected_dn', true);
}
