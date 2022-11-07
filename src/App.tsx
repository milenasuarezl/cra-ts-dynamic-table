import './App.css';
import Table, { IColumnType } from './components/Table';


interface IData {
  name: string;
  qty: string;
  price: string;
}

const data: IData[] = [
  { name: "Potatoes", qty: "4.00", price: "10.5423"},
  { name: "Tomatoes", qty: "3.00", price: "18.1112" },
  { name: "Cheese", qty: "5.00", price: "13.2212" },
  { name: "Milk", qty: "8.00", price: "5.0543" },
  { name: "Juice", qty: "6.00", price: "9.3832" }
 ];

function App() {
  const columns: IColumnType<IData>[] = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key:'qty',
      title: 'Qty',
    },
    {
      key:'amount',
      title: 'Amount',
      render: ({ qty, price }) => {
        const amount = Number(qty) * Number(price);
        return(
          <>
            {amount}
          </>
        )
      },
    }
  ]
  return (
    <div className="App">
      <h1>Dynamic Table</h1>
      <Table data={data} columns={columns} />
    </div>
  );
}

export default App;
