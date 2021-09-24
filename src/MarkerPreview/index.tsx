import React, { FC } from 'react';
import cx from 'classnames';

export interface MarkerPreviewProps {
    shape?: string;
    color?: string;
    size?: string;
    extraClassNames?: string | string[];

    // extraStyles?: string | string[] | { [key: string]: any };
}

export const MarkerPreview: FC<MarkerPreviewProps> = ({ shape, color, size, extraClassNames }) => (
    <i
        data-testid="marker-preview"
        className={cx("fa", extraClassNames)}
        style={{ color: color, fontSize: size || '16px' }}
        dangerouslySetInnerHTML={{ __html: `&#x${shape};` }}
    />
);
