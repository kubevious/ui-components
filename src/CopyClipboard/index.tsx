import { faClone as farClone } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { CopyClipboardProps } from './types';

import styles from './styles.module.css';

export const CopyClipboard: FC<CopyClipboardProps> = ({ text }) => {
    const [copied, setCopied] = useState<boolean>(false);

    const copyText = (): void => {
        const textField: HTMLTextAreaElement = document.createElement('textarea');
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

    return (
        <div data-testid="copy-clipboard" className={cx('copy-icon', styles.iconWrapper)}>
            {copied && (
                <div className={styles.copiedContainer}>
                    Copied to clipboard
                    <div className={styles.caret} />
                </div>
            )}

            <FontAwesomeIcon
                className={cx('copy-icon', styles.copyIcon)}
                icon={farClone}
                onClick={copyText}
                title="Copy to clipboard"
            />
        </div>
    );
};

export default CopyClipboard;
