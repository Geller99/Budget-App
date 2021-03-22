import React , { useContext, useState, useEffect} from "react";
import GlobalContext from './../Context/Context';


function DailySave({transactionList}) {
  
 const  [transactions, setTransactions] = useState('')

 const privateContext = useContext(GlobalContext)

 const generator = () => {
   
  return transactions.forEach(value => {
      return <div>
        Hello Geller
      </div>
    })
 }


 
  useEffect(()=> {   
    
    setTransactions(privateContext)
  }, [privateContext])


  return (
    <div className="item savings">
    
          {generator}

    </div>
  );
}

export default DailySave;


