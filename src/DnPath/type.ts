import { RnInfo } from '@kubevious/helpers/dist/dn-utils';
import { IconSize } from '../DnIconComponent/types';

export interface DnPathProps {
    dnParts: RnInfo[];
    includeLogo?: boolean;
    iconSize?: IconSize;
}
