import { Dn } from '@kubevious/entity-meta'

export type IconSize = 'xs' | 'md' | 'lg' | 'custom';

export interface DnIconComponentProps {
    dnParts: Dn;
    size: IconSize;
    extraClassNames?: string | string[] | { [key: string]: any };
}
