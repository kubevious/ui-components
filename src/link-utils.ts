import _ from 'the-lodash';
import * as H from 'history';
import { encodeURL } from './utils/url'

export function navigateTo(history: H.History, path: string, searchParams?: Record<string, any>, preserveSearchParams? : boolean)
{
    const finalSearchParams : Record<string, any> = {};

    if (preserveSearchParams) {
        const currSearchParamsObj = new URLSearchParams(window.location.search);
        currSearchParamsObj.forEach(function(value, name) {
            finalSearchParams[name] = value;
        });
    }

    if (searchParams) {
        for(const name of _.keys(searchParams)) {
            const value = searchParams[name];
            if (_.isNullOrUndefined(name)) {
                delete finalSearchParams[name];
            } else {
                finalSearchParams[name] = value;
            }
        }
    }

    const url = encodeURL(path, finalSearchParams);
    history.push(url);
}