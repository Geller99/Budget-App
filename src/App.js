import React from "react";
import "./main.css";
import NavBarPartA from './components/NavBarPartA';
import NavBarPartB from './components/NavBarPartB';

// import GlobalContext from './context/Context';
import { Provider } from "react-redux";
import store from './store/store';
import WeatherCard from './components/WeatherTab/WeatherCard';
import SocialsTab from './components/SocialsTab/SocialsTab';
import DailyBudget from './components/BudgetTab/DailyBudget';




const App = () => {


    return (
        <Provider store = {store}>

      <div className="wrapper">

      
        <div className="side__nav">
          <NavBarPartA/>
          <NavBarPartB/>

        </div>

        <div className="container">
            

           <div className="container__col1">
           
          </div>

            <div className="container__col2">
            <DailyBudget/>

            </div>
        
            <div div className="container__col3">
                <WeatherCard/>
                <SocialsTab/>
            </div> 
       </div>
        



      </div>

       </Provider>
    );
  }


export default App;
