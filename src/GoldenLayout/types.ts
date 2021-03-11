import { GoldenLayout } from "."

export type GoldenLayoutComponentProps = {
    windows?: GoldenLayoutWindowInfo[],
    handleLayout?: (control: GoldenLayout) => void,
    handleClose: GoldenWindowCloseHandler
}

export interface GoldenLayoutWindowInfo
{
    id: string,
    component: any,
    location: GoldenLayoutLocation,
    title: string,
    allowVerticalScroll?: boolean,
    skipClose?: boolean
    height?: number
    width?: number
}

export interface InternalGoldenComponent {
    id: string,
    info: GoldenLayoutWindowInfo
    goldenComponent?: any
    goldenTab?: any
    goldenContainer?: any
}

export enum GoldenLayoutLocation
{
    main = 'main',
    right = 'right',
    left = 'left',
    bottom = 'bottom',
    top = 'top'
}

export type GoldenWindowCloseHandler = (id: string, windowInfo: GoldenLayoutWindowInfo) => void;