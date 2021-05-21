import _ from 'the-lodash';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { LinkProps } from './types';

import styles from './styles.module.css';

import { encodeURL } from './utils';

export const PageLink: FC<LinkProps> = ({ name, path, searchParams, children, ...rest }) => {
   
    const url = encodeURL(path, searchParams);

    return (
        <Link to={url} className={styles.link} data-testid="link" {...rest}>
            {children ?? name}
        </Link>
    );
};
