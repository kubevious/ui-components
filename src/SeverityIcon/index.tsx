import React, { FC } from 'react';
import styles from './styles.module.css';
import cx from 'classnames';
import { SeverityIconProps } from './types';

export const SeverityIcon: FC<SeverityIconProps> = ({
    severity,
    extraClassNames,
    size
}) => {
    size = size ?? 16;
   
    return <>
        <div className={cx(styles.alertItem, styles[severity], extraClassNames)}
             style={{ width: `${size}px`, height: `${size}px` }}
             >
        </div>
    </>
};



