export interface MarkerInfo {
    shape: string;
    color: string;
}

export interface DnShortcutComponentProps {
    dn: string;
    clusterId?: string,
    errors?: number;
    warnings?: number;
    markers?: string[];
    flags?: string[];
    options?: {
        relativeTo?: string;
    };
}
