

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = ({currency}) => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
   
   if(currency == "pound"){
   
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
   }

  else if(currency == "dollar"){
   
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    );
   }

   else if(currency == "rupee"){
   
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining:  ₹{budget - totalExpenses}</span>
        </div>
    );
   }
   else if(currency == "euro"){
   
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining:  €{budget - totalExpenses}</span>
        </div>
    );
   }
   else {
   
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £ {budget - totalExpenses}</span>
        </div>
    );
   }
};
export default Remaining;


