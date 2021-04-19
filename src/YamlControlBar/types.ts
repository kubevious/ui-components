export interface YamlControlBarProps {
    value: string;
    beforeChange?: ({ value }: { value: string }) => void;
    text?: string;
    buttonText?: string;
    downloadButton?: boolean;
    className?: string;
}
