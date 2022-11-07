import './table.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export interface IColumnType<T> {
    key: string;
    title: string;
    width?: number;
    render?: (item: T) => void; 
}

export interface Props<T> {
    data: T[];
    columns: IColumnType<T>[];
}

const Table = <T,>({ data, columns}: Props<T>): JSX.Element => {
    return (
        <table>
            <thead>
                <tr>
                    { columns.map((column, index) => <TableHeader key={`table-head${index}`} column={column} />)}
                </tr>
            </thead>
            <tbody>
                { data.map((row: any, rowIndex): any => 
                    <tr key={rowIndex}>
                        {
                            columns.map((column, columnIndex) => (
                                <TableRow key={columnIndex} row={row} column={column}/>   
                            ))
                        }
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table;