import React, { FC, useState } from 'react';
import { subscribeToSharedState } from '@kubevious/ui-framework';
import { MarkerPreview } from '../MarkerPreview';

import { IconBox } from '../IconBox';

export interface MarkerIconProps {
    marker: string;
    size?: number;
    extraClassNames?: string | string[];
    extraStyle?: React.CSSProperties;
}

export const MarkerIcon: FC<MarkerIconProps> = ({ marker, size, extraClassNames, extraStyle }) => {

    const [markerInfo, setMarkerInfo] = useState<MarkerInfo | null>(null);

    subscribeToSharedState('markers_dict', (markers_dict: Record<string, MarkerInfo> | undefined) => {
        console.log("MARKER DICT: ", markers_dict)
        if (markers_dict) {
            const x = markers_dict[marker];
            if (x) {
                setMarkerInfo(x);
                return;
            }
        }
        setMarkerInfo(null);
    })

    const renderTooltipContents = () => <>
        Marker: {marker}
    </>;

    const fontSize = size || 16;

    return <>
        <IconBox width={fontSize} height={fontSize} 
                 tooltipContentsFetcher={renderTooltipContents}
                 extraClassNames={extraClassNames}
                 extraStyle={extraStyle}
                 >
            {markerInfo &&  <MarkerPreview 
                shape={markerInfo.shape} 
                color={markerInfo.color}
                size={`${fontSize}px`}
                /> }
        </IconBox>
    </>
}

interface MarkerInfo {
    shape: string;
    color: string;
}
