import React, { FC } from 'react';
import { CopyButton } from './BarButtons/CopyButton';
import { DownloadButton } from './BarButtons/DownloadButton';
import { Controlled as CodeMirrorEditor } from 'react-codemirror2';

import './styles.scss';
import { CodeControlBarProps } from './types';

require('codemirror/theme/darcula.css');
require('codemirror/lib/codemirror.css');
require('codemirror/mode/yaml/yaml');
require('codemirror/mode/shell/shell');
require('codemirror/mode/javascript/javascript');

export const CodeControlBar: FC<CodeControlBarProps> = ({
    value = '',
    beforeChange,
    downloadButton,
    className = '',
    mode = 'yaml',
}) => {
    let editorLine = '';

    if (Array.isArray(value)) {
        editorLine = value.join('\n');
    } else if (typeof value === 'string') {
        editorLine = value;
    } else {
        editorLine = JSON.stringify(value, null, 4);
    }

    return (
        <>
            <div data-testid="code-control-bar" className="text-area-btn-wrapper response-btn-wrapper">
                {downloadButton && <DownloadButton text={editorLine} />}
                <div className="footer">
                    <CopyButton text={editorLine} />
                </div>
            </div>

            <div className="editor-box">
                <CodeMirrorEditor
                    value={editorLine.replace(/(\\)?\\n/g, '\n')}
                    options={{
                        mode,
                        theme: 'darcula',
                    }}
                    editorDidMount={(editor) => editor.refresh()}
                    className={className}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    onBeforeChange={(editor, data, value) => {
                        if (beforeChange) {
                            beforeChange({ value });
                        }
                    }}
                />
            </div>
        </>
    );
};
