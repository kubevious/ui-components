import React, { FC, Fragment } from 'react';
import _ from 'the-lodash';
import cx from 'classnames';
import { RnInfo } from '@kubevious/helpers/dist/dn-utils';
import { prettyKind } from '@kubevious/helpers/dist/docs';
import { DnPathProps } from './type';

export const DnPath: FC<DnPathProps> = ({ dnParts, includeLogo, bigLogo }) => {
    console.log('aasa', dnParts)
    if (dnParts.length > 0 && dnParts[0].kind === 'root') {
        dnParts = dnParts.splice(1);
    }
    const lastPart = _.last(dnParts);

    console.log('dn', dnParts);

    return (
        <div data-testid="dn-path" className="dn-path">
            {includeLogo && lastPart && (
                <img
                    className={cx('dn-logo', { big: bigLogo })}
                    src={`/img/entities/${lastPart.kind}.svg`}
                    alt={lastPart.kind}
                />
            )}
            {dnParts.map((part: RnInfo, index: number) => {
                const kind = prettyKind(part.kind);

                console.log('ehre??');
                return (
                    <Fragment key={index}>
                        <span className="kind">{kind}</span>
                        <span />
                        <span className="name">{part.name}</span>
                        {part !== lastPart && <span className="separator">&gt</span>}
                    </Fragment>
                );
            })}
            <div className="clearfix" />
        </div>
    );
};

export default DnPath;
