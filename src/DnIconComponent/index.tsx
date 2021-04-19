import React, { FC } from 'react';
import { DnIconComponentProps } from './types';
import cx from 'classnames';

import styles from './styles.module.css';

export const getEntityImgUrl = (kind: string): string => `/img/entities/${kind}.svg`;

export const DnIconComponent: FC<DnIconComponentProps> = ({ kind, size, ...rest }) => (
    <img className={cx('dn-logo', styles[size])} src={getEntityImgUrl(kind)} alt="logo" {...rest} />
);
