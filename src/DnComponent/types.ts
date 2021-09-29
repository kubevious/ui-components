import { IconSize } from "../DnIconComponent/types";
export interface DnComponentProps {
    dn: string;
    iconSize?: IconSize;
    options?: {
        relativeTo?: string;
    };
}
