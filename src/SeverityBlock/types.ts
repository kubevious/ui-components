
export interface SeverityBlockProps {
    errors?: number;
    warnings?: number;
    showZeros?: boolean;
    extraClassNames?: string | string[] | { [key: string]: any };
    selfAlerts?: boolean;
}
