import _ from 'the-lodash';
import React from 'react';
import { useHistory } from 'react-router-dom';

import "./styles.scss"
import { LinkProps } from './types';

export const Link: React.FunctionComponent<LinkProps> = ({ name, path, searchParams }) => {
    const history = useHistory();

    const openPage = (): void => {

        const url = encodeUrl(path, searchParams);

        history.push({
            pathname: url
        });
        
    };

    return (
        <a className="link" data-testid="link" onClick={() => openPage()}>
            {name}
        </a>
    );
};



function encodeSearchQuery(searchParams? : Record<string, any>)
{
    const parts : string[] = [];
    if (searchParams) {
        for(let key of _.keys(searchParams))
        {
            let value = searchParams[key];
            if (!_.isNotNullOrUndefined(value)) {
                parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(_.toString(value))}`);
            }
        }
    }
    return parts.join('&');
}

function encodeUrl(path: string, searchParams? : Record<string, any>)
{
    let url = path;
    let search = encodeSearchQuery(searchParams);
    if (search) {
        url += '?' + search;
    }
    return url;
}
