export interface CodeControlBarProps {
    value: string | string[] | Record<string, any>;
    beforeChange?: ({ value }: { value: string }) => void;
    downloadButton?: boolean;
    className?: string;
    mode?: 'javascript' | 'yaml' | 'shell';
}
