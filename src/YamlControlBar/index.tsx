import React from 'react';
import { CopyButton } from './BarButtons/CopyButton';
import { DownloadButton } from './BarButtons/DownloadButton';
import { Controlled as CodeMirrorEditor } from 'react-codemirror2'

import './styles.scss'
require('codemirror/theme/darcula.css')
require('codemirror/lib/codemirror.css')
require('codemirror/mode/yaml/yaml')

const isTesting = process.env.IS_TESTING;

export const YamlControlBar = ({
    value,
    beforeChange,
    text = '',
    buttonText = '',
    downloadButton,
    className = ''
}: {
    value: string,
    beforeChange?: ({ value }: { value: string; }) => void,
    text?: string,
    buttonText?: string,
    downloadButton?: boolean,
    className?: string
}): JSX.Element => {
    return (
        <>
            <div data-testid="yaml-control-bar" className="text-area-btn-wrapper response-btn-wrapper">
                {downloadButton && <DownloadButton text={text} />}
                <div className="footer">
                    <CopyButton text={text} buttonText={buttonText} />
                </div>
            </div>
            {!isTesting && <div className="editor-box">
                <CodeMirrorEditor
                    value={value}
                    options={{
                        mode: "yaml",
                        theme: "darcula",
                    }}
                    className={className}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    onBeforeChange={(editor, data, value) => {
                        if (beforeChange) {
                            beforeChange({ value })
                        }
                    }}
                />
            </div>}
        </>
    )
}
