import React, { FC, useState } from 'react';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyButtonProps } from './types';

import styles from './styles.module.css';

export const CopyButton: FC<CopyButtonProps> = ({ text = '' }) => {
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

    return <div className={styles.container}>

        <FontAwesomeIcon className={styles.copyIcon} icon={faCopy} onClick={copyText} title="Copy to clipboard" />

        {copied && (
            <div className={styles.copiedContainer}>
                Copied to clipboard
                <div className={styles.caret} />
            </div>
        )}
    </div>
};
