import React, { FC } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import cx from 'classnames';

import styles from './styles.module.css';

import { FLAG_TOOLTIPS } from '@kubevious/helpers/dist/docs';

export interface FlagIconProps {
    flag: string;
    size?: number;
    extraStyles?: string | string[] | { [key: string]: any };
}

export const FlagIcon: FC<FlagIconProps> = ({ flag, size, extraStyles }) => {


    const renderTooltip = (props: any) => {
        let value = FLAG_TOOLTIPS[flag];
        if (!value) {
            value = `Flag: {flag}`;
        }
        return (
            <Tooltip id="flag-tooltip" {...props}>
                <div dangerouslySetInnerHTML={{ __html: value }} />
            </Tooltip>
        )
    };

    size = size || 16;
    const boxSize = size + 10;
    
    return <>
        <div className={cx(styles.container, extraStyles)} >
            <OverlayTrigger
                placement="right"
                delay={{ show: 100, hide: 300 }}
                overlay={renderTooltip}
            >
                <div className={styles.innerContainer}
                     style={{ width: `${boxSize}px`, height: `${boxSize}px` }}
                     >
                    <div className={styles.icon}
                         style={{ 
                             backgroundImage: `url(${FlagIconGetImageUrl(flag)})`,
                             width: `${size}px`,
                             height: `${size}px`
                        }}
                        />
                </div>
            </OverlayTrigger>
        </div>
    </>
}

export function FlagIconGetImageUrl(flag: string)
{
    return `/img/flags/${flag}.svg`;
}