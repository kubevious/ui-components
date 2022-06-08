import _ from 'the-lodash';
import React, { FC, ReactElement } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Placement } from '@popperjs/core'

export type TooltipContentsCb = (props: any) => any;

export interface TooltipContainerProps {
    contents: ReactElement;
    tooltipContentsFetcher? : TooltipContentsCb;
    placement?: Placement;
}

export const TooltipContainer: FC<TooltipContainerProps> = ({ contents, placement, tooltipContentsFetcher }) => {

    placement = placement ?? 'top';

    const renderTooltip = (props: any) => (
        <Tooltip id="tooltip" {...props}>
            {tooltipContentsFetcher && tooltipContentsFetcher(props)}
        </Tooltip>
    );

    return <>
        <OverlayTrigger
            placement={placement}
            delay={{ show: 300, hide: 100 }}
            overlay={renderTooltip}
            >

            { contents }

        </OverlayTrigger>
    </>
}