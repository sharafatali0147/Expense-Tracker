import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = (props) => {
    const { id, text, amount } = props;
    const sign = amount < 0 ? "-" : "+";

    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <li className={amount < 0 ? "minus" : "plus" }>
            {id} {text} <span>{sign}${Math.abs(amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        </li>
    )
}

export default Transaction
