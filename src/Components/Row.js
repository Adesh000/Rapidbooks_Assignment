import React, { useState } from "react";

const Row = ({addAccountData}) => {

    const [accountData, setAccountData] = useState({
        accountNo: "",
        debitAmount: "",
        creditAmount: "",
    });

    const getAccountData = (e) => {
        let id, val;
        id = e.target.id;
        val = e.target.value;
        setAccountData({ ...accountData, [id]: val });
    };

    return (
        <div className="row">
            <select
                name="account-numbers"
                id="accountNo"
                value={accountData.accountNo}
                onChange={getAccountData}
            >
                <option value="109751">Choose Account</option>
                <option value="109700">109700</option>
                <option value="104852">104852</option>
                <option value="158236">158236</option>
                <option value="584222">584222</option>
                <option value="488521">488521</option>
            </select>
            <input
                type="number"
                name="amount"
                id="debitAmount"
                value={accountData.debitAmount}
                onChange={getAccountData}
            />
            <input
                type="number"
                name="amount"
                id="creditAmount"
                value={accountData.creditAmount}
                onChange={getAccountData}
            />
            <button className="add" onClick={() => addAccountData(accountData)}>
                +
            </button>
            <button className="delete">X</button>
        </div>
    );
};

export default Row;
