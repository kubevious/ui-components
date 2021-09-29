import React, { FC } from 'react';
import { DnIconComponentProps } from './types';
import cx from 'classnames';

import styles from './styles.module.css';
import { Dn, DIAGRAM_ICONS } from '@kubevious/entity-meta'

function getEntityImgUrl(dnParts: Dn) : string
{
    const img = DIAGRAM_ICONS.get(dnParts);
    if (img) {
        return img
    }
    return '/img/entity/unknown.svg';
}

export const DnIconComponent: FC<DnIconComponentProps> = ({ dnParts, size = 'lg', ...rest }) => (
    <img className={cx(styles[size])} src={getEntityImgUrl(dnParts)} alt="logo" {...rest} />
);


