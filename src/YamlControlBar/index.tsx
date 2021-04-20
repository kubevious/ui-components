import React, { FC } from 'react';
import { isValidJson } from '../isValidJson';
import { CopyButton } from './BarButtons/CopyButton';
import { DownloadButton } from './BarButtons/DownloadButton';
import { Controlled as CodeMirrorEditor } from 'react-codemirror2';

import './styles.scss';
import { YamlControlBarProps } from './types';

require('codemirror/theme/darcula.css');
require('codemirror/lib/codemirror.css');
require('codemirror/mode/yaml/yaml');
require('codemirror/mode/shell/shell');

export const YamlControlBar: FC<YamlControlBarProps> = ({
    value,
    beforeChange,
    text = '',
    buttonText = '',
    downloadButton,
    className = '',
    mode = 'yaml',
}) => {
    const editorLine = isValidJson(value) ? JSON.parse(value).join('\n') : value;

    return (
        <>
            <div data-testid="yaml-control-bar" className="text-area-btn-wrapper response-btn-wrapper">
                {downloadButton && <DownloadButton text={text} />}
                <div className="footer">
                    <CopyButton text={text} buttonText={buttonText} />
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
