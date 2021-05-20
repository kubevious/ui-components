import { DnShortcutComponentProps } from '../DnShortcutComponent/types';

export interface DnResultsProps {
    items: DnShortcutComponentProps[];
}

export interface GroupInfo {
    id: string;
    name: string;
    items: DnShortcutComponentProps[];
}
