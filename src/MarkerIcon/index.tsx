import React, { FC, useState } from 'react';
import { subscribeToSharedState } from '@kubevious/ui-framework';
import { MarkerPreview } from '../MarkerPreview';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import cx from 'classnames';

import styles from './styles.module.css';

export interface MarkerIconProps {
    marker: string;
    size?: number;
    extraStyles?: string | string[] | { [key: string]: any };
}

export const MarkerIcon: FC<MarkerIconProps> = ({ marker, size, extraStyles }) => {

    const [markerInfo, setMarkerInfo] = useState<MarkerInfo | null>(null);

    subscribeToSharedState('markers_dict', (markers_dict: Record<string, MarkerInfo> | undefined) => {
        if (markers_dict) {
            const x = markers_dict[marker];
            if (x) {
                setMarkerInfo(x);
                return;
            }
        }
        setMarkerInfo(null);
    })

    const renderTooltip = (props: any) => (
        <Tooltip id="marker-tooltip" {...props}>
          Marker: {marker}
        </Tooltip>
    );

    const fontSize = size || 16;
    const boxSize = fontSize + 10;
    
    return <>
        <div className={cx(styles.container, extraStyles)} >
            <OverlayTrigger
                placement="top"
                delay={{ show: 100, hide: 300 }}
                overlay={renderTooltip}
                >
                <div className={styles.innerContainer}
                     style={{ width: `${boxSize}px`, height: `${boxSize}px` }}
                     >
                    {markerInfo && 
                        <MarkerPreview 
                            shape={markerInfo.shape} 
                            color={markerInfo.color}
                            size={`${fontSize}px`}
                            extraStyles={styles.icon}
                            /> }
                </div>
            </OverlayTrigger>
        </div>
    </>
}

interface MarkerInfo {
    shape: string;
    color: string;
}
