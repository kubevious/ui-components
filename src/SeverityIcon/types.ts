
export type SeverityType = "error" | "warn";

export interface SeverityIconProps {
    severity: SeverityType;
    extraClassNames?: string | string[] | { [key: string]: any };
}
