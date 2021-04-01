import _ from 'the-lodash';
import React from 'react';
import { useHistory } from 'react-router-dom';

import "./styles.scss"
import { LinkProps } from './types';

export const Link: React.FunctionComponent<LinkProps> = ({ name, path, searchParams }) => {
    const history = useHistory();

    const openPage = (): void => {

        const urlObj = new URL(path);

        if (searchParams) {
            for(let key of _.keys(searchParams))
            {
                let value = searchParams[key];
                if (!_.isNotNullOrUndefined(value)) {
                    urlObj.searchParams.append(key, _.toString(value));
                }
            }
        }

        history.push({
            pathname: urlObj.href,
        });
        
    };

    return (
        <a className="link" data-testid="link" onClick={() => openPage()}>
            {name}
        </a>
    );
};
