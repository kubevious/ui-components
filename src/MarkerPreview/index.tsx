import React, { FC } from 'react';
import cx from 'classnames';

export interface MarkerPreviewProps {
    shape?: string;
    color?: string;
    size?: string;
    extraStyles?: string | string[] | { [key: string]: any };
}

export const MarkerPreview: FC<MarkerPreviewProps> = ({ shape, color, size, extraStyles }) => (
    <i
        data-testid="marker-preview"
        className={cx("fa", extraStyles)}
        style={{ color: color, fontSize: size || '16px' }}
        dangerouslySetInnerHTML={{ __html: `&#x${shape};` }}
    />
);
