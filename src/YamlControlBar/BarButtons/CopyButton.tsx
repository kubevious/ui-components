import React, { FC, useState } from 'react';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyButtonProps } from './types';

import './styles.scss';

export const CopyButton: FC<CopyButtonProps> = ({ text = '', buttonText = '' }) => {
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

    return buttonText ? (
        <button className="main-btn send" onClick={copyText}>
            {buttonText}
        </button>
    ) : (
        <>
            {copied && (
                <div className="copied-container">
                    Copied to clipboard
                    <div className="caret" />
                </div>
            )}

            <FontAwesomeIcon className="copy-icon" icon={faCopy} onClick={copyText} title="Copy to clipboard" />
        </>
    );
};
