import { IColumnType } from "./Table";

interface Props<T> {
    row: any;
    column: IColumnType<T>;
}

const TableRow = <T,>({row, column}: Props<T>): JSX.Element => {
    return(
        <td>
            {column.render ? column.render(row) : row[`${column.key}`]}
        </td>
    )
}

export default TableRow;