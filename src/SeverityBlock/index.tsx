import React, { FC } from 'react';
import { SeverityBlockProps } from './types';
import { IconBox } from '../IconBox';
import { SeverityIcon } from '../SeverityIcon';
import { Label } from '../Label';

import styles from './styles.module.css';

export const SeverityBlock: FC<SeverityBlockProps> = ({ errors, warnings, extraClassNames }) => {

    const hasErrors = (errors ?? 0) > 0;
    const hasWarnings = (warnings ?? 0) > 0;

    const returnAlertTooltipContent = () => {
        return <div className={styles.tooltipAlertContainer}>
            <div className={styles.tooltipAlertSeverity}>
                Total number of alerts<br/>within the hierarchy.
            </div>

            {hasErrors && <div className={styles.tooltipAlertSeverity}>
                <SeverityIcon severity="error"/>
                Errors:
                <Label text={`${errors}`} ></Label>
            </div>}

            {hasWarnings && <div className={styles.tooltipAlertSeverity}>
                <SeverityIcon severity="warn" />
                Warnings:
                <Label text={`${warnings}`} ></Label>
            </div>}
        </div>
    };
   
    return <>
        {(hasErrors || hasWarnings) && <>
            <IconBox height={16}
                     tooltipContentsFetcher={returnAlertTooltipContent}
                     innerExtraStyle={{ gap: '10px' }}
                     extraClassNames={extraClassNames}
                     >
                {hasErrors && <span className={styles.severityWrapper}>
                    <span className={styles.severity}>
                        <SeverityIcon severity="error"/>
                    </span>
                    <Label text={`${errors}`} ></Label>
                </span>}
                {hasWarnings && <span className={styles.severityWrapper}>
                    <span className={styles.severity}>
                        <SeverityIcon severity="warn" />
                    </span>
                    <Label text={`${warnings}`} ></Label>
                </span>}
            </IconBox>

        </>}
    </>
};



