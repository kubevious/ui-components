import React, { FC, useState } from 'react';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorBoxProps } from './types';

import './styles.scss';

export const ErrorBox: FC<ErrorBoxProps> = ({ error, closeError }) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const { data, status } = error;

    const message = error.message || data.message;
    const stack = error.stack || data.stack;

    return (
        <div data-testid="error-box" className="ErrorBox-container">
            <div className="error">
                <div className="error-text">
                    Error {status || 0}: {message}
                </div>

                <div className="more-text">
                    {expanded && (
                        <FontAwesomeIcon data-testid="error-box-expanded" icon={faTimes} onClick={() => closeError()} />
                    )}
                    {!expanded && (
                        <FontAwesomeIcon
                            data-testid="error-box-non-expanded"
                            icon={faChevronDown}
                            onClick={() => setExpanded(true)}
                        />
                    )}
                </div>
            </div>

            {expanded && (
                <div className="full-error-container">
                    {status === 500 && <div className="msg retry">Please try refreshing the page</div>}
                    <div className="msg">Error occurred: {message ? message : error.data}</div>
                    {stack && <div className="msg">{stack}</div>}
                </div>
            )}
        </div>
    );
};

export default ErrorBox;
