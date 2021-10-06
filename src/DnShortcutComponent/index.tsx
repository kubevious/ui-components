import React, { FC } from 'react';
import { DnShortcutComponentProps } from './types';
import { DnComponent } from '../DnComponent';
import { app } from '@kubevious/ui-framework';

import styles from './styles.module.css';
import { FlagIcon } from '../FlagIcon';
import { MarkerIcon } from '../MarkerIcon';
import { SeverityBlock } from '..';

export const { sharedState } = app;

export const DnShortcutComponent: FC<DnShortcutComponentProps> = ({ dn, clusterId, options, errors = 0, warnings = 0, markers = [], flags }) => {

    const clickDn = (): void => {
        sharedState.set('selected_dn', dn);
        sharedState.set('auto_pan_to_selected_dn', true);
        sharedState.set('popup_window', null);
        if (clusterId) {
            sharedState.set('selected_cluster', clusterId);
        }
    };

    errors = errors ?? 0;
    warnings = warnings ?? 0;

    return (
        <div data-testid="dn-shortcut-component" className={styles.dnShortcut} onClick={() => clickDn()}>
            <DnComponent dn={dn} options={options} />

            <div className={styles.flagsContainer}>

                {markers && markers.map((marker) => (
                    <MarkerIcon key={marker} marker={marker} />
                ))}

                {flags && flags.map((flag) => (
                    <FlagIcon key={flag} flag={flag} />
                ))}

                {((errors > 0) || (warnings > 0)) && 
                    <SeverityBlock errors={errors} warnings={warnings} />
                }
            </div>
        </div>
    );
};
