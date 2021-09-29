import _ from 'the-lodash';
import React, { FC } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import cx from 'classnames';

import styles from './styles.module.css';

export type TooltipContentsCb = (props: any) => any;

export interface IconBox {
    width?: number;
    height?: number;
    innerPadding?: number;
    extraClassNames?: string | string[] | { [key: string]: any };
    extraStyle?: React.CSSProperties;
    tooltipContentsFetcher? : TooltipContentsCb;
    innerExtraClassNames?: string | string[] | { [key: string]: any };
    innerExtraStyle?: React.CSSProperties;
}

export const IconBox: FC<IconBox> = ({ children, innerPadding, width, height, extraClassNames, extraStyle, tooltipContentsFetcher, innerExtraClassNames, innerExtraStyle }) => {

    const renderTooltip = (props: any) => (
        <Tooltip id="tooltip" {...props}>
            {tooltipContentsFetcher && tooltipContentsFetcher(props)}
        </Tooltip>
    );

    let outerStyle : Record<string, any> = {};
    if (extraStyle) {
        outerStyle = _.clone(extraStyle);
    }
    // outerStyle.width = `${size}px`;
    // outerStyle.height = `${size}px`;

    // const innerSize = size - (innerPadding ?? 5) * 2;

    let innerStyles : Record<string, any> = {};
    if (innerExtraStyle) {
        innerStyles = _.clone(innerExtraStyle);
    }
    if (width) {
        innerStyles.width = `${width}px`;
    }
    if (height) {
        innerStyles.height = `${height}px`;
    }

    innerPadding = innerPadding ?? 5;
    innerStyles.margin = `${innerPadding}px`;

    return <>
        <OverlayTrigger
            placement="top"
            delay={{ show: 300, hide: 100 }}
            overlay={renderTooltip}
            >

            <div className={cx(styles.container, extraClassNames)} style={outerStyle} >
                <div className={cx(styles.border)}>
                    <div className={cx(styles.innerContainer, innerExtraClassNames)}
                        style={innerStyles}
                        >
                        {children}
                    </div>
                </div>
            </div>

        </OverlayTrigger>

    </>
}