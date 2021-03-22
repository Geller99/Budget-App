import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


function UserSignup() {
    const [user, setUser] = useState()

    const usersList = []

    function User (name, email, userName, pin) {
        this.name = name;
        this.email = email;
        this.pin = pin;
    }

    const createUser = (e)=> {
        e.preventDefault()
       setUser(new User())
        
    }

    const addUser = () => {
        usersList.push(user)
        console.log(usersList)
    }

   
    useEffect(() => {

        console.log(user)
        
    })
   

    return (
        <div>
         <button className='formReveal' onClick = {createUser} >Click Here to Create New User </button>

             <form onSubmit = {(e) => {e.preventDefault()}}>

            <input type ='text' onChange = {(e) => { user.name = e.target.value }} />
            <input type ='email' onChange = {(e) => { user.email = e.target.value }} />
            <input type = 'number' maxLength = '5' onChange = {(e) => { user.pin = e.target.value}}/>

            <button onClick = {addUser} > Complete! </button>


            </form>    

        </div>
    )
}

export default UserSignup
