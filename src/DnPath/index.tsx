import React, { FC } from 'react';
import _ from 'the-lodash';
import { DnIconComponent } from '../DnIconComponent';
import { DnPathProps } from './type';
import cx from 'classnames';
import { NODE_LABELS, RnInfo } from '@kubevious/entity-meta'

import styles from './styles.module.css';
import colorStyles from '../common-styles/text-color-styles.module.css';

function getLabel(item: RnInfo): string
{
    return NODE_LABELS.get(item.kind);
}

export const DnPath: FC<DnPathProps> = ({ dn, dnPathIndex, includeLogo, iconSize }) => {
    const dnParts = _.drop(dn, dnPathIndex ?? 1);

    return <>
        <div data-testid="dn-path" className={styles.dnPath}>
            
            {includeLogo && <div className={styles.dnIconContainer}>
                <DnIconComponent dnParts={dn} size={iconSize ?? "md"} />
            </div>}

            {dnParts.map((item, index) => <React.Fragment key={index}>
                <span className={cx(styles.dnPathKind, colorStyles.faded)}>{getLabel(item)}</span>
                <span className={cx(styles.dnPathName, colorStyles.normal)}>{item.name}</span>
                {(index !== dnParts.length - 1) && <span className={styles.dnPathSeparator}>&gt;</span>}
            </React.Fragment>)}
        </div>
    </>;
};