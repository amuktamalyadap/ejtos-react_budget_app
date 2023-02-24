


import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = ({currency}) => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);


    if(currency == "pound"){
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
    }

   else if(currency == "dollar"){
        return (
            <div className='alert alert-primary'>
                <span>Spent so far: ${totalExpenses}</span>
            </div>
        );
        }
        else if(currency == "rupee"){
            return (
                <div className='alert alert-primary'>
                    <span>Spent so far: ₹{totalExpenses}</span>
                </div>
            );
            }
            else if(currency == "euro"){
                return (
                    <div className='alert alert-primary'>
                        <span>Spent so far: €{totalExpenses}</span>
                    </div>
                );
                }
            else {
                return (
                    <div className='alert alert-primary'>
                        <span>Spent so far: £{totalExpenses}</span>
                    </div>
                );
                }
            
};
export default ExpenseTotal;
