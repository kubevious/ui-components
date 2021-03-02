import React, { Fragment } from "react"
import _ from "the-lodash"
import cx from "classnames"
import { RnInfo } from "@kubevious/helpers/dist/dn-utils"
import { prettyKind } from "@kubevious/helpers/dist/docs"
import { DnPathProps } from "./type"

export const DnPath: React.FunctionComponent<DnPathProps> = ({
    dnParts,
    includeLogo,
    bigLogo,
}) => {
    if (dnParts.length > 0 && dnParts[0].kind === "root") {
        dnParts = dnParts.splice(1)
    }
    const lastPart = _.last(dnParts)

    return (
        <div data-testid="dn-path" className="dn-path">
            {includeLogo && lastPart && (
                <img
                    className={cx("dn-logo", { big: bigLogo })}
                    src={`/img/entities/${lastPart.kind}.svg`}
                />
            )}
            {dnParts.map((part: RnInfo, index: number) => {
                const kind: string = prettyKind(part.kind)
                return (
                    <Fragment key={index}>
                        <span className="kind">{kind}</span>
                        <span></span>
                        <span className="name">{part.name}</span>
                        {part !== lastPart && (
                            <span className="separator">&gt</span>
                        )}
                    </Fragment>
                )
            })}
            <div className="clearfix"></div>
        </div>
    )
}

export default DnPath;
