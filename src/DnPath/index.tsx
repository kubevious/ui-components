import React, { FC, Fragment } from 'react';
import _ from 'the-lodash';
import { RnInfo } from '@kubevious/helpers/dist/dn-utils';
import { prettyKind } from '@kubevious/helpers/dist/docs';
import { DnIconComponent } from '../DnIconComponent';
import { DnPathProps } from './type';

export const DnPath: FC<DnPathProps> = ({ dnParts, includeLogo, iconSize = "md" }) => {
    if (dnParts.length > 0 && dnParts[0].kind === 'root') {
        dnParts = dnParts.splice(1);
    }
    const lastPart = _.last(dnParts);

    return (
        <div data-testid="dn-path" className="dn-path">
            {includeLogo && lastPart && <DnIconComponent kind={lastPart.kind} size={iconSize} />}
            
            {dnParts.map((part: RnInfo, index: number) => {
                const kind = prettyKind(part.kind);

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
