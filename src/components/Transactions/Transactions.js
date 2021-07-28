import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import GlobalContext from '../../Context/Context';


/* 

This component takes user input and returns a transaction list
The transaction list is then used to update the table of transactions in a different component
This daily transaction list is also used to update the Daily budget tab

*/
function UserInput({transaction, setTransaction}) {

    const newContext = useContext(GlobalContext)

    function Transaction(description, value, type) {
        this.description = description;
        this.value = value;
        this.type = type;
    };

    const newTransaction = () => {
       setTransaction(new Transaction())
    
    }

    const handleSelect = (event)=> {
        transaction.type = event.target.value
    }
    return (
             <div className="item info"> 
                <button onClick = {newTransaction}> new transaction </button>

             <form action='submit'>
                 <select onChange = {handleSelect} >
                    <option defaultValue> -- select an option -- </option>
                    <option> withdrawal </option>
                    <option> deposit </option>
                 </select>

                 <input type="text" placeholder="Enter Description" onChange = { e => transaction.description = e.target.value} />

                <input type="number" placeholder="value" onChange = { e => transaction.value = e.target.value}/>
                
                <button type="submit" onClick = {e => {e.preventDefault()
                   newContext.push(transaction)
                   console.log(newContext) }
                 }> Add Transaction </button>


             </form>

             </div>
    )
}

export default UserInput
