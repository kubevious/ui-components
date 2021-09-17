import React, { FC } from 'react';
import { DnShortcutComponentProps } from './types';
import { DnComponent } from '../DnComponent';
import { app } from '@kubevious/ui-framework';
import cx from 'classnames';

import styles from './styles.module.css';
import { MarkerIcon } from '..';

export const { sharedState } = app;


export const DnShortcutComponent: FC<DnShortcutComponentProps> = ({ dn, clusterId, options, errors = 0, warnings = 0, markers = [] }) => {

    const clickDn = (): void => {
        sharedState.set('selected_dn', dn);
        sharedState.set('auto_pan_to_selected_dn', true);
        sharedState.set('popup_window', null);
        if (clusterId) {
            sharedState.set('selected_cluster', clusterId);
        }
    };

    return (
        <div data-testid="dn-shortcut-component" className={styles.dnShortcut} onClick={() => clickDn()}>
            <DnComponent dn={dn} options={options} />

            <div className={styles.flagsContainer}>

                {markers && markers.map((marker, index) => (
                    <div key={index} className={styles.markersContainer}>
                        <MarkerIcon marker={marker} />
                    </div>
                ))}

                <div className={styles.alertsContainer}>
                    {((errors ?? 0) > 0) && <div className={cx(styles.alertIndicator, styles.errorAlert)}>{errors > 1 && errors}</div>}
                    {((warnings ?? 0) > 0) && <div className={cx(styles.alertIndicator, styles.warningAlert)}>{warnings > 1 && warnings}</div>}
                </div>
            </div>
        </div>
    );
};
