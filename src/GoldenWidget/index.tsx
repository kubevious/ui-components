import React, { ReactNode } from 'react';
import { ClassComponent } from '@kubevious/ui-framework';

export interface GoldenWidgetProps
{
    content: ReactNode
}

export interface GoldenWidgetState
{
    content: ReactNode
}

export class GoldenWidget extends ClassComponent<GoldenWidgetProps, GoldenWidgetState> {
    constructor(props: GoldenWidgetProps) {
        super(props);

        this.state = {
            content: props.content
        };
    }

    componentDidMount() {
        
    }

    render() {
        const { content } = this.state;

        return (
            <>
                { content }
            </>
        );
    }
}
