import { IColumnType } from "./Table";

interface Props<T>{
    column: IColumnType<T>;
}

const TableHeader = <T,>({column} :Props<T>): JSX.Element => {
    return (<th>{column.title}</th>)
}

export default TableHeader;