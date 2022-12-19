
import { useState } from 'react';
import './App.css';
import Row from './Components/Row';

function App() {
  const accountArray = []
  const [rowData, setRowData] = useState([]);

    const addAccountData = (data) => {
        setRowData(data)
        console.log(rowData)
      };
      accountArray.push(rowData)
      console.log(accountArray)

  return (
    <div className="main-container">
      <div>
        <div className="heading">
          <h2>Account Dropdown</h2>
          <h2>Debit Amount</h2>
          <h2>Credit Amount</h2>
        </div>
        <Row addAccountData={addAccountData}/>
        <Row addAccountData={addAccountData}/>
        <button>Add New</button>
      </div>
    </div>
  );
}

export default App;
