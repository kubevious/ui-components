import React, { FC } from 'react';
import styles from './styles.module.css';

export type TableData<TRow = any> = TRow[];

export interface TableProps<TRow = any>
{
    title?: string;
    columns: string[];
    data: TableData<TRow>;
    rowConverter?: (row: TRow) => React.ReactNode[];
    skipHeader?: boolean;
}

export const Table: FC<TableProps> = ({ title, columns, data, rowConverter, skipHeader }) =>
{
    const rows = data.map(x => rowConverter ? rowConverter(x) : x);

    return (
        <div>
            {title && <div className={styles.title} >{title}</div>}
            <table className={styles.table}>
                {!skipHeader && 
                <thead>
                    <tr>
                        {columns.map((x, index) => 
                            <th key={index}>
                                {x}
                            </th>
                        )}
                    </tr>
                </thead>
                }
                <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell: any, index2: number) => (
                            <td key={index2}>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
    
} 
