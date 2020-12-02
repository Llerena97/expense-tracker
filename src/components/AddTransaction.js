import React, {useState, useContext} from 'react';
import { v4 as uuid } from 'uuid';

import {GlobalContext} from './../context/GlobalState'

const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext)
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = e => {
    e.preventDefault()
    const newTransaction = { id: uuid(), text, amount: +amount }
    addTransaction(newTransaction)
    setText('')
    setAmount(0)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit} id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            type="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input
            value={amount}
            onChange={e => setAmount(e.target.value)}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
 
export default AddTransaction;