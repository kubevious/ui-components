import React, { FC, Fragment } from 'react';
import _ from 'the-lodash';
import { prettyKind } from '@kubevious/helpers/dist/docs';
import { DnIconComponent } from '../DnIconComponent';
import { DnPathProps } from './type';
import cx from 'classnames';

import styles from './styles.module.css';
import colorStyles from '../common-styles/text-color-styles.module.css';

export const DnPath: FC<DnPathProps> = ({ dnParts, includeLogo, iconSize }) => {
    if (dnParts.length > 0 && dnParts[0].kind === 'root') {
        dnParts = dnParts.splice(1);
    }
    const lastPart = _.last(dnParts);
    const kind = lastPart ? lastPart.kind : '';

    return <>
        <div data-testid="dn-path" className={styles.dnPath}>
            
            {includeLogo && <div className={styles.dnIconContainer}>
                <DnIconComponent kind={kind} size={iconSize ?? "md"} />
            </div>}

            {dnParts.map((item, index) => (
                <Fragment key={index}>
                    <span className={cx(styles.dnPathKind, colorStyles.faded)}>{prettyKind(item.kind)}</span>
                    <span className={cx(styles.dnPathName, colorStyles.normal)}>{item.name}</span>
                    {index !== dnParts.length - 1 && <span className={styles.dnPathSeparator}>&gt;</span>}
                    {index === dnParts.length - 1 && <div className="clearfix" />}
                </Fragment>
            ))}
        </div>
    </>;
};