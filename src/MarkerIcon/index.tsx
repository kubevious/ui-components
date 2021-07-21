import React, { FC, useEffect, useRef, useState } from 'react';
import { subscribeToSharedState } from '@kubevious/ui-framework';
import { MarkerPreview } from '../MarkerPreview';
import { Tooltip } from 'bootstrap';
import cx from 'classnames';

import styles from './styles.module.css';

export interface MarkerIconProps {
    marker: string;
    size?: number;
    extraStyles?: string | string[] | { [key: string]: any };
}

export const MarkerIcon: FC<MarkerIconProps> = ({ marker, size, extraStyles }) => {

    const tooltipRef = useRef();  

    const [markerInfo, setMarkerInfo] = useState<MarkerInfo | null>(null);

    subscribeToSharedState('markers_dict', markers_dict => {
        if (markers_dict) {
            const x = markers_dict[marker];
            if (x) {
                setMarkerInfo(x);
                return;
            }
        }
        setMarkerInfo(null);
    })

    useEffect(() => {
        var tooltip = new Tooltip(tooltipRef.current, {
            title: "This is the tooltip content!",
            placement: 'right',
            trigger: 'hover'
        })
    })

    const fontSize = size || 16;
    const boxSize = fontSize + 10;
    
    return <>
        <div className={cx(styles.container, extraStyles)} >
            <div ref={tooltipRef} 
                 className={styles.innerContainer}
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
        </div>
    </>
}

interface MarkerInfo {
    shape: string;
    color: string;
}
