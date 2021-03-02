import * as React from 'react';
import { useState } from 'react';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';
import { Error } from './types';

export const ErrorBox: React.FunctionComponent<{
    error: Error;
    closeError: () => void;
}> = ({ error, closeError }) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const {
        data: { message, stack },
        status,
    } = error;

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
