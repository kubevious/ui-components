import { GoldenLayout } from "."

export type GoldenLayoutComponentProps = {
    windows?: GoldenLayoutWindowInfo[],
    handleLayout?: (control: GoldenLayout) => void
}

export interface GoldenLayoutWindowInfo
{
    id?: string,
    name: string,
    component: any,
    location: GoldenLayoutLocation,
    title: string,
    allowVerticalScroll?: boolean,
    skipClose?: boolean
    height?: number
    width?: number
}

export interface InternalGoldenComponent extends GoldenLayoutWindowInfo {
    info?: GoldenLayoutWindowInfo
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
