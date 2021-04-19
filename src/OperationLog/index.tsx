import React, { FC, useState } from 'react';
import { subscribeToSharedState } from '@kubevious/ui-framework';
import { Message } from '@kubevious/ui-framework/dist/operation-log-tracker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';

export const OperationLog: FC = () => {
    const [operationLogs, setOperationLogs] = useState<Message[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    subscribeToSharedState('operation_logs', (logs) => {
        setOperationLogs(logs ?? []);
    });

    const openDetails = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return operationLogs.length ? (
        <details data-testid="operation-log" className={styles.operationLogDetails} open={isOpen}>
            {operationLogs.map((log) => (
                <summary key={log.id}>
                    {log.message}
                    <FontAwesomeIcon icon={faChevronCircleRight} className={styles.expandIcon} onClick={openDetails} />
                </summary>
            ))}
        </details>
    ) : null;
};
