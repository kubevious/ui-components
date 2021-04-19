import React, { FC } from 'react';
import { CopyButton } from './BarButtons/CopyButton';
import { DownloadButton } from './BarButtons/DownloadButton';
import { Controlled as CodeMirrorEditor } from 'react-codemirror2';

import './styles.scss';
import { YamlControlBarProps } from './types';

require('codemirror/theme/darcula.css');
require('codemirror/lib/codemirror.css');
require('codemirror/mode/yaml/yaml');

const isTesting = process.env.IS_TESTING;

export const YamlControlBar: FC<YamlControlBarProps> = ({
    value,
    beforeChange,
    text = '',
    buttonText = '',
    downloadButton,
    className = '',
}) => {
    return (
        <>
            <div data-testid="yaml-control-bar" className="text-area-btn-wrapper response-btn-wrapper">
                {downloadButton && <DownloadButton text={text} />}
                <div className="footer">
                    <CopyButton text={text} buttonText={buttonText} />
                </div>
            </div>
            {!isTesting && (
                <div className="editor-box">
                    <CodeMirrorEditor
                        value={value.replace(/(\\)?\\n/g, '\n')}
                        options={{
                            mode: 'yaml',
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
            )}
        </>
    );
};
