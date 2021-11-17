import React, { FC, useState } from 'react';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorBoxProps } from './types';
import cx from 'classnames';

import styles from './styles.module.css';

export const ErrorBox: FC<ErrorBoxProps> = ({ error, closeError, details, refreshRequest }) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <div data-testid="error-box" className={styles.container}>
            <div className={styles.error}>
                <div className={styles.errorText}>
                    Error: {error.message}
                </div>

                <div className={styles.moreText}>
                    {!expanded && (
                        <FontAwesomeIcon
                            data-testid="error-box-non-expanded"
                            icon={faChevronDown}
                            onClick={() => setExpanded(true)}
                        />
                    )}
                    {expanded && (
                        <FontAwesomeIcon data-testid="error-box-expanded" icon={faTimes} onClick={() => closeError()} />
                    )}
                </div>
            </div>

            {expanded && (
                <div className={styles.fullErrorContainer}>
                    
                    {refreshRequest && <div className={cx(styles.msg, styles.retry)}>Please try refreshing the page</div>}

                    {details && details.map((detail, index) => {
                        return <div key={index}>
                            <span className={styles.detailName}>{detail.name}: </span>
                            <span className={styles.detailValue}>{detail.value}</span>
                        </div>
                    })}
                    
                    {error.stack && <div className={styles.msg}>
                        <span className={styles.detailName}>Stack Trace: </span>
                        <span className={styles.detailValue}>{error.stack}</span>
                    </div>}
                    
                </div>
            )}
        </div>
    );
};
