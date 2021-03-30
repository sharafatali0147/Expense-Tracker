import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
        }

        addTransaction(newTransaction);
    }


    return (
        <>
            <h3>Add new Transaction</h3>
            <form onSubmit= {onSubmit}> 
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        placeholde="Enter text..."
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount<br />
                        (negative - expense, positive - income)
                    
                    </label>
                    <input
                        type="number"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
