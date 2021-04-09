import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

export const DownloadButton: React.FunctionComponent<{ text: string }> = ({ text = '' }) => {

    const downloadFile = async () => {
        const fileName = 'Response'
        const blob = new Blob([text], { type: 'application/yaml' })
        const href = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = href
        link.download = fileName + '.yaml'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <button
            className="download main-btn"
            onClick={() => downloadFile()}
            title="Download"
        >
            <FontAwesomeIcon icon={faDownload} />
        </button>
    )
}
