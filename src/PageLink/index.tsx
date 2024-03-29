import _ from 'the-lodash';
import React, { FC, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import { TextSize, TextColor } from '../common-styles/text-types';

import sizeStyles from '../common-styles/text-size-styles.module.css';
import colorStyles from '../common-styles/text-color-styles.module.css';

import { encodeURL } from '../utils/url';

export interface LinkProps {
    name?: string;
    textSize?: TextSize;
    textColor?: TextColor;
    path: string;
    searchParams?: Record<string, any>;
    onClick?: MouseEventHandler<any> | undefined;
    extraStyles?: string | string[] | { [key: string]: any };
    target?: string;
    handlePreClick?: () => void;
}

export const PageLink: FC<LinkProps> = ({ 
    name,
    textSize,
    textColor,
    path,
    searchParams,
    children,
    onClick,
    handlePreClick,
    extraStyles,
    target,
    ...rest
}) => {
   
    const url = encodeURL(path, searchParams);

    const linkStyleMap : { [key: string]: any } = {};
    const textStyleMap : { [key: string]: any } = {};
    if (name)
    {
        textSize = textSize || 'normal';
        textStyleMap[sizeStyles[textSize]] = true;

        textColor = textColor || 'link';
        // textStyleMap[colorStyles[textColor]] = true;
        linkStyleMap[colorStyles[textColor + '-link']] = true;
    }

    const handleClick : MouseEventHandler = (e) => {
        if (handlePreClick) {
            handlePreClick();
        }
        if (onClick) {
            onClick(e);
        }
    } 

    if (isExternalLink(url)) {
        return (
            <a className={cx(linkStyleMap, extraStyles)} 
                data-testid="link"
                href={url}
                target={target}
                onClick={handleClick}
                {...rest}>

            {name && <span className={cx(textStyleMap)} >
                    {name}
                </span>}

                {children}
            </a>
        );
    }

    return (
        <Link className={cx(linkStyleMap, extraStyles)}
              data-testid="link"
              to={url}
              onClick={handleClick}
              {...rest}>
            {name && <span className={cx(textStyleMap)} >
                {name}
            </span>}
            {children}
        </Link>
    );
};

function isExternalLink(url: string)
{
    return url && (
        _.startsWith(url, 'http://') ||
        _.startsWith(url, 'https://') ||
        _.startsWith(url, 'mailto:') 
    )
}