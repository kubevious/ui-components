import React, { useState } from "react"
import { subscribeToSharedState } from "@kubevious/ui-framework"
import { Message } from "@kubevious/ui-framework/dist/operation-log-tracker"
import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"

const isTesting = process.env.IS_TESTING;

export const OperationLog = () => {
    const [operationLogs, setOperationLogs] = useState<Message[]>([])
    const [isOpen, setIsOpen] = React.useState(false);

    subscribeToSharedState('operation_logs', (logs) => {
        if (logs) {
            setOperationLogs(isTesting ? [{
                id: 'testId',
                message: 'test message',
                date: new Date()
            }] : logs)
        } else {
            setOperationLogs([])
        }
    })

    const openDetails = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    return operationLogs.length ? (
        <>
            <details data-testid="operation-log" className="operationLogDetails" open={isOpen}>
                {operationLogs.map((val) => (
                    <summary key={val.id}>{val.message}
                        <FontAwesomeIcon
                            icon={faChevronCircleRight}
                            className="expandIcon"
                            onClick={(e) => openDetails(e)}
                        />
                    </summary>
                ))}
            </details>
        </>
    ) : null
}
