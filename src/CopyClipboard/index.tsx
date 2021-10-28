import React, { FC, useState } from 'react';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyClipboardProps } from './types';
import cx from 'classnames';

import styles from './styles.module.css';

export const CopyClipboard: FC<CopyClipboardProps> = ({ text, popupRight }) => {
    const [copied, setCopied] = useState(false);

    const copyText = () => {
        const textField = document.createElement('textarea');
        textField.value = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        setCopied(true);
        textField.remove();

        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return <div data-testid="copy-clipboard" className={styles.container}>

        <FontAwesomeIcon className={styles.copyIcon} icon={faCopy} onClick={copyText} title="Copy to clipboard" />

        {copied && (
            <div className={cx(styles.copiedContainer, { [styles.copiedContainerRight] : popupRight } )}>
                Copied to clipboard
                <div className={styles.caret} />
            </div>
        )}
    </div>
};
