import React, { FC } from 'react';
import styles from './styles.module.css';
import cx from 'classnames';
import { SeverityIconProps } from './types';

export const SeverityIcon: FC<SeverityIconProps> = ({ severity, extraClassNames }) => {
   
    return <>
        <div className={cx(styles.alertItem, styles[severity], extraClassNames)} >
        </div>
    </>
};



