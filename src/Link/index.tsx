import React from 'react';
import { useHistory } from 'react-router-dom';

import "./styles.scss"
import { LinkProps } from './types';

export const Link: React.FunctionComponent<LinkProps> = ({ name, path }) => {
    const history = useHistory();

    const redirectToCluster = (path: string): void => {
        history.push({
            pathname: path,
        });
    };

    return (
        <a className="link" data-testid="link" onClick={() => redirectToCluster(path)}>
            {name}
        </a>
    );
};
