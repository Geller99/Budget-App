import React, {useState, useEffect} from 'react'
import "../App.css";



function DailyBudget() {
    
    const [budget, setBudget] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        setBudget(event.target.value)
          }  

    return (
        <div className="item budget">
                <form>
                <p> Enter your daily budget! </p>
                <input type = 'number' maxLength = '3' min = '0' onChange = {handleSubmit} />
                <p>Your Budget is: ${budget} </p>
                <p> Amount Left: </p>
                </form>
         
            
        </div>
    )
}

export default DailyBudget
