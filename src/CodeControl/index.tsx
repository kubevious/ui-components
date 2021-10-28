import _ from 'the-lodash';
import React, { FC } from 'react';
import { CopyClipboard } from '../CopyClipboard';
import { DownloadButton } from './BarButtons/DownloadButton';
import { Controlled as CodeMirrorEditor } from 'react-codemirror2';
import jsyaml from 'js-yaml';

import { CodeControlProps } from './types';

// require('codemirror/theme/solarized.css');
require('codemirror/theme/darcula.css');
require('codemirror/lib/codemirror.css');
require('codemirror/mode/yaml/yaml');
require('codemirror/mode/shell/shell');
require('codemirror/mode/javascript/javascript');

import styles from './styles.module.css';

export const CodeControl: FC<CodeControlProps> = ({
    value,
    syntax,
    handleChange,
    showLineNumbers,
    showDownloadButton,
    showCopyButton,
    onKeyUp,
    extraKeys,
    indent
}) => {
    let editorLine = '';

    let mode = '';

    let filename = 'config';

    switch(syntax)
    {
        case 'javascript':
            {
                editorLine = value;
                mode = 'javascript';
                filename += '.js';
            }
            break;

        case 'yaml':
            {
                if (_.isString(value))
                {
                    editorLine = value;
                } 
                else
                {
                    editorLine = jsyaml.dump(value, { indent: indent ?? 4 })
                }
                mode = 'yaml';
                filename += '.yaml';
            }
            break;

        case 'json':
            {
                if (_.isString(value))
                {
                    editorLine = value;
                } 
                else
                {
                    editorLine = JSON.stringify(value, null, indent ?? 4);
                }
                mode = 'javascript';
                filename += '.json';
            }
            break;

        case 'shell':
            {
                if (_.isArray(value)) {
                    editorLine = value.join('\n');
                } else {
                    editorLine = _.toString(value);
                }
                mode = 'shell';
                filename += '.sh';
            }
            break;
    }


    return (
        <div data-testid="code-control-bar" className={styles.container} >
            <div className={styles.buttonsWrapper}>
                {showDownloadButton && <DownloadButton text={editorLine} fileName={filename} />}
                {showCopyButton && <CopyClipboard text={editorLine} />}
            </div>

            <div className={styles.editorBox}>
                <CodeMirrorEditor
                    value={editorLine.replace(/(\\)?\\n/g, '\n')}
                    options={{
                        mode,
                        theme: 'darcula', //'solarized dark',
                        lineNumbers: showLineNumbers,
                        extraKeys: extraKeys
                    }}
                    editorDidMount={(editor) => editor.refresh()}
                    className={styles.reactCodeMirror}
                    onKeyUp={onKeyUp}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    onBeforeChange={(editor, data, value) => {
                        if (handleChange) {
                            handleChange(value);
                        }
                    }}
                />
            </div>
        </div>
    );
};
