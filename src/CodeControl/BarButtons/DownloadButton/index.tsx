import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { DownloadButtonProps } from './types';
import cx from 'classnames';

import styles from './styles.module.css';

export const DownloadButton: FC<DownloadButtonProps> = ({ text = '' }) => {
    const downloadFile = async () => {
        const fileName = 'Response';
        const blob = new Blob([text], { type: 'application/yaml' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + '.yaml';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className={cx(styles.barBtn, styles.downloadBtn)} onClick={downloadFile} title="Download">
            <FontAwesomeIcon icon={faDownload} />
        </button>
    );
};
