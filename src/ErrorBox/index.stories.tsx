import { Story } from '@storybook/react';
import React from 'react';
import { ErrorBox } from './';
import { ErrorDetailField } from './types';

export default {
    title: 'ErrorBox',
    component: ErrorBox
};


const closeError = () => {};

export const Default: Story = () => {

    let myError : any = null;
    try
    {
        throw new Error("Something goes wrong");
    }
    catch(reason)
    {
        myError = reason;
    }

    return (<div>
        <ErrorBox error={myError} closeError={closeError} />
    </div>)
};

export const HttpError: Story = () => (
    <div>
        <ErrorBox error={HTTP_ERROR} closeError={closeError} details={DETAILED_PARAMS}  />
    </div>
);

export const ConnectionError: Story = () => (
    <div>
        <ErrorBox error={CONNECTION_ERROR} closeError={closeError} refreshRequest />
    </div>
);


const HTTP_ERROR = {
    name: 'HttpClientError',
    message: 'Request failed with status code 404',
    stack: 'Error: Request failed with status code 404\n' +
      '    at createError (/Users/user/repos/kubevious/http-client.git/node_modules/axios/lib/core/createError.js:16:15)\n' +
      '    at settle (/Users/user/repos/kubevious/http-client.git/node_modules/axios/lib/core/settle.js:17:12)\n' +
      '    at IncomingMessage.handleStreamEnd (/Users/user/repos/kubevious/http-client.git/node_modules/axios/lib/adapters/http.js:293:11)\n' +
      '    at IncomingMessage.emit (events.js:327:22)\n' +
      '    at IncomingMessage.EventEmitter.emit (domain.js:467:12)\n' +
      '    at endReadableNT (internal/streams/readable.js:1327:12)\n' +
      '    at processTicksAndRejections (internal/process/task_queues.js:80:21)',
    httpUrl: 'http://localhost:3334/v1/missing-url',
    httpMethod: 'POST',
    httpParams: { foo: 'bar' },
    httpStatusCode: 404,
    httpStatusText: 'Not Found'
}

const CONNECTION_ERROR = {
    name: 'HttpClientError',
    message: 'connect ECONNREFUSED 127.0.0.1:111',
    stack: 'Error: connect ECONNREFUSED 127.0.0.1:111\n' +
      '    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1146:16)',
    httpUrl: 'http://localhost:111/do-something',
    httpMethod: 'GET',
    httpParams: {},
    httpStatusCode: undefined,
    httpStatusText: undefined
}

const DETAILED_PARAMS: ErrorDetailField[] = [
    {
        name: 'foo',
        value: 'bar'
    },
    {
        name: 'foo2',
        value: 'bar2'
    }
]