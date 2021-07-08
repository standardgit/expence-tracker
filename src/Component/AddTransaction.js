import React,{ useState } from 'react';
import './TransactionList.css';

const AddTransaction = () =>{
    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0)


    return(
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text...." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;