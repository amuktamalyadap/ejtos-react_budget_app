

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = ({currency}) => {
    const { budget } = useContext(AppContext);
    if(currency == "rupee"){
    return (
      
        <div className='alert alert-secondary'>
            <span>Budget ₹: {budget}</span>
        </div>
     
    
    );
    }
    else if (currency == "dollar"){
        return (
          
            <div className='alert alert-secondary'>
                <span>Budget $: {budget}</span>
            </div>
         
        
        );
        }
        else if (currency == "pound"){
            return (
              
                <div className='alert alert-secondary'>
                    <span>Budget £: {budget}</span>
                </div>
             
            
            );
            }
            else if (currency == "euro"){
                return (
                  
                    <div className='alert alert-secondary'>
                        <span>Budget €: {budget}</span>
                    </div>
                 
                
                );
                }
            else {
                return (
                  
                    <div className='alert alert-secondary'>
                        <span>Budget £: {budget}</span>
                    </div>
                 
                
                );
                }
};
export default Budget;

