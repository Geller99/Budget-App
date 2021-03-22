import React from 'react'



/*  create a class object that represents user information with details and properties
    a "create new user button that reveals a signup form" which then creates a user object based on the previous class
    signup form input boxes to edit values of this new object
    click "Signup" pushes this new user Object into an array or local storage */

/* create a method that checks user input in login against stored values for each account in LS
    Upon validation, keep user signed in and open dashboard */
  



    
function UserLogin() {
    let userVerify = ''
    let userPin = ''

    
  

   const setUserId = (e) => { userVerify = e.target.value } 
   
   const setPin = (e) => { userPin = e.target.value }     


    const clickHandler = (e)=> {
        e.preventDefault()
       if (userPin === '' && userVerify === '') {
         console.log('')
    } else {
        alert('User Not Found!')
    }

}


    return (

        <div>



        <form action = '' >
            <div>Login to get started! </div>

            <input type="text" placeholder='userId' onChange = {setUserId} />
            <input type="text" placeholder = 'pin' onChange = {setPin} />


           <button type='submit' onClick= {clickHandler}> Go </button>
        </form>   
        </div>
    )
}

export default UserLogin
