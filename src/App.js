
import { useState } from 'react';
import './App.css';

function App() {
  const [accounts, setAccounts] = useState([])
  return (
    <div className="main-container">
      <form>
        <div className="heading">
          <h2>Account Dropdown</h2>
          <h2>Debit Amount</h2>
          <h2>Credit Amount</h2>
        </div>
        <div className="row">
          <select name="account-numbers" id="account-numbers">
            <option value="109700">109700</option>
            <option value="109751">109751</option>
            <option value="104852">104852</option>
            <option value="158236">158236</option>
            <option value="584222">584222</option>
            <option value="488521">488521</option>
          </select>
          <input type="number" name="amount" id="c-amount" />
          <input type="number" name="amount" id="d-amount" />
          <button className='add'>+</button>
          <button className='delete'>X</button>
        </div>
      </form>
    </div>
  );
}

export default App;
