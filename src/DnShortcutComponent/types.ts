export interface MarkerDict {
    shape: string;
    color: string;
}

export interface SelectedData {
    dn: string;
    id?: number;
    errors?: number;
    warnings?: number;
    options?: {
        relativeTo?: string;
    };
    markers?: string[];
}
