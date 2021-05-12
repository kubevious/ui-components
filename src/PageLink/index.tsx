import _ from 'the-lodash';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { LinkProps } from './types';

import styles from './styles.module.css';

export const PageLink: FC<LinkProps> = ({ name, path, searchParams, children, ...rest }) => {
    const encodeSearchQuery = (searchParams?: Record<string, any>) => {
        const parts: string[] = [];
        if (searchParams) {
            for (const key of _.keys(searchParams)) {
                const value = searchParams[key];
                if (_.isNotNullOrUndefined(value)) {
                    parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(_.toString(value))}`);
                }
            }
        }
        return parts.join('&');
    };

    return (
        <Link to={`${path}?${encodeSearchQuery(searchParams)}`} className={styles.link} data-testid="link" {...rest}>
            {children ?? name}
        </Link>
    );
};

// function encodeUrl(path: string, searchParams? : Record<string, any>)
// {
//     let url = path;
//     let search = encodeSearchQuery(searchParams);
//     if (search) {
//         url += '?' + search;
//     }
//     return url;
// }
