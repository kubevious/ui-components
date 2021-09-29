import { Dn } from '@kubevious/entity-meta';
import { IconSize } from '../DnIconComponent/types';

export interface DnPathProps {
    dn: Dn;
    dnPathIndex?: number;
    includeLogo?: boolean;
    iconSize?: IconSize;
}
