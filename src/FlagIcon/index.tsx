import React, { FC } from 'react';

import styles from './styles.module.css';

import { FlagKind, FLAGS_TOOLTIPS } from '@kubevious/entity-meta';
import { IconBox } from '../IconBox';

export interface FlagIconProps {
    flag: string;
    size?: number;
    extraClassNames?: string | string[] | { [key: string]: any };
    extraStyle?: React.CSSProperties;
}

export const FlagIcon: FC<FlagIconProps> = ({ flag, size, extraClassNames, extraStyle }) => {

    const renderTooltipContents = () => {
        const flagEnum = (flag as FlagKind);
        let value = FLAGS_TOOLTIPS.get(flagEnum);
        if (!value) {
            value = `Flag: {flag}`;
        }
        return (
            <div dangerouslySetInnerHTML={{ __html: value }} />
        )
    };
    
    const fontSize = size || 16;

    return <>
        <IconBox width={fontSize} height={fontSize}
                 tooltipContentsFetcher={renderTooltipContents}
                 extraClassNames={extraClassNames}
                 extraStyle={extraStyle}
                 >
            <div className={styles.icon}
                 style={{backgroundImage: `url(${FlagIconGetImageUrl(flag)})`}}>
            </div>
        </IconBox>
    </>
}

export function FlagIconGetImageUrl(flag: string)
{
    return `/img/flags/${flag}.svg`;
}