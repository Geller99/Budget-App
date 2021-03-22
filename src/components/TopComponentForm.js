
import userEvent from '@testing-library/user-event'
import React, { Component } from 'react'
import './TopComponent.css'

class TopComponentForm extends Component {
    constructor(props) {
        super(props)

        let monthName = ['nuke', 'January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const day = new Date()    
        const getMonth = day.getMonth()

        this.state = {
             month: monthName[getMonth]
        }    
        

    }
 


    render() {
        return (
            <div>
            <article> Available Budget in {this.state.month}</article>
            <article> {this.state.budget} </article>
            <article className="article1"> INCOME </article>
            <article className="article2"> EXPENSES </article>
    
        </div>
        )
    }
}

export default TopComponentForm
