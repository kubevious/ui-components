import Codemirror from 'codemirror';

export type CodeMirrorDomEvent = (editor: Codemirror.Editor, event?: any) => void;
export interface CodeControlProps {
    value: any;
    syntax: 'javascript' | 'yaml' | 'json' | 'shell';

    indent?: number;

    showDownloadButton?: boolean;
    showCopyButton?: boolean;

    showLineNumbers?: boolean;

    handleChange?: (value: string) => void;

    onKeyUp?: CodeMirrorDomEvent;

    extraKeys?: Record<string, any>;

    sizeToContent?: boolean;

    extraContainerClassName?: string;
}
