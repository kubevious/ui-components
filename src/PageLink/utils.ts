import _ from 'the-lodash';

export function encodeSearchQuery(searchParams?: Record<string, any>)
{
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

export function encodeURL(path: string, searchParams?: Record<string, any>)
{
    return `${path}?${encodeSearchQuery(searchParams)}`;
};