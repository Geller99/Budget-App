import React, {useState } from "react";
import "./App.css";
import NavBarPartA from './components/NavBarPartA';
import NavBarPartB from './components/NavBarPartB';
import UserInput from './components/UserInput';
import FinanceChart from './components/FinanceChart';
import UserCard from "./components/UserCard";
import DailySave from "./components/DailySave";
import DailyBudget from "./components/DailyBudget";
import WeatherCard from './components/WeatherCard';
import SocialsTab from './components/SocialsTab';
import GlobalContext from './Context/Context';



const App = () => {

  

  const [transaction, setTransaction] = useState([])

  const transactionList = [];

    return (
      <GlobalContext.Provider value = {transactionList} >
      <div className="wrapper">

      
        <div className="side__nav">
          <NavBarPartA/>
          <NavBarPartB/>

        </div>

        <div className="container">


           <div className="container__col1">
              <UserInput transaction = {transaction} setTransaction = {setTransaction} />
              <FinanceChart/>
              <UserCard/>
          </div>

            <div className="container__col2">
               <DailySave  transaction = {transaction}  />
               <DailyBudget/>

            </div>
        
            <div div className="container__col3">
                <WeatherCard/>
                <SocialsTab/>
            </div> 
       </div>
        



      </div>
      </GlobalContext.Provider>
    );
  }


export default App;
