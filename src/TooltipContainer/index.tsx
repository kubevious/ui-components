import _ from 'the-lodash';
import React, { FC, ReactElement } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export type TooltipContentsCb = (props: any) => any;

export interface TooltipContainerProps {
    contents: ReactElement;
    tooltipContentsFetcher? : TooltipContentsCb;
}

export const TooltipContainer: FC<TooltipContainerProps> = ({ contents, tooltipContentsFetcher }) => {

    const renderTooltip = (props: any) => (
        <Tooltip id="tooltip" {...props}>
            {tooltipContentsFetcher && tooltipContentsFetcher(props)}
        </Tooltip>
    );

    return <>
        <OverlayTrigger
            placement="top"
            delay={{ show: 300, hide: 100 }}
            overlay={renderTooltip}
            >
            
            { contents }

        </OverlayTrigger>
    </>
}