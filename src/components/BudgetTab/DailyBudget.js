import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { depositTransaction } from '../../features/deposit/deposit.action';
import "../../main.css";
import store from './../../store/store';
import { useState } from 'react';
import { withdrawTransaction } from './../../features/withdraw/withdraw.action';



function DailyBudget() {
    

    const initialState = useSelector(state => state.deposit.accountBalance )
    const dispatch = useDispatch()
    const [transaction, setTransaction] = useState(null)
    const [newValue, setNewValue]  = useState(null)
    const [options, setOptions] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        options === 'Deposit'?  
        dispatch(depositTransaction(newValue, transaction)):
        dispatch(withdrawTransaction(newValue, transaction))
    }
    
    const grabTransactionType = e => {
        setOptions(e.target.value)

        console.log('Transaction Type', options)
    }
    return (
        <div className="item budget">

                <form  onSubmit = {handleSubmit}>
                <p> Enter your daily budget! </p>
                <input type = 'number'  onChange = {e => setNewValue(e.target.value)} placeholder='amount...' />
                <p>Enter transaction name: </p> 
                <select value = {options} onChange = {grabTransactionType} >
                    <option>Deposit</option>
                    <option>Withdrawal</option>
                </select>
                <input type="text" placeholder='transaction name...' onChange = { e => setTransaction(e.target.value)} />
                <p>Your Budget is:  </p>
                <button type ='submit' > Submit Transaction </button>
                <p> Amount Left: {initialState} </p>
                {console.log('Initial balance', store.getState())}
                </form>
         
            
        </div>
    )
}



      

export default DailyBudget
