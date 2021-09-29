import { Dn } from '@kubevious/entity-meta'

export type IconSize = 'xs' | 'md' | 'lg';

export interface DnIconComponentProps {
    dnParts: Dn;
    size: IconSize;
}
