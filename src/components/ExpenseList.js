

import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = ({currency}) => {
    const { expenses } = useContext(AppContext);
    

    if(currency=="pound"){
    
    return (
      
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          
            <tbody>
               
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={"£" +expense.cost} />
            ))}

            </tbody>

        </table>
         
    );
            }

            else if(currency=="dollar"){
    
                return (
                  
                    <table className='table'>
                          <thead className="thead-light">
                        <tr>
                          <th scope="col">Department</th>
                          <th scope="col">Allocated Budget</th>
                          <th scope="col">Increase by 10</th>
                          <th scope="col">Decrease by 10</th>
                          <th scope="col">Delete</th>
                        </tr>
                      </thead>
                      
                        <tbody>
                           
                        {expenses.map((expense) => (
                            <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={"$" +expense.cost} />
                        ))}
            
                        </tbody>
            
                    </table>
                     
                );
                        }

                        else if(currency=="rupee"){
    
                            return (
                              
                                <table className='table'>
                                      <thead className="thead-light">
                                    <tr>
                                      <th scope="col">Department</th>
                                      <th scope="col">Allocated Budget</th>
                                      <th scope="col">Increase by 10</th>
                                      <th scope="col">Decrease by 10</th>
                                      <th scope="col">Delete</th>
                                    </tr>
                                  </thead>
                                  
                                    <tbody>
                                       
                                    {expenses.map((expense) => (
                                        <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={"₹" +expense.cost} />
                                    ))}
                        
                                    </tbody>
                        
                                </table>
                                 
                            );
                                    }

                                    else if(currency=="euro"){
    
                                        return (
                                          
                                            <table className='table'>
                                                  <thead className="thead-light">
                                                <tr>
                                                  <th scope="col">Department</th>
                                                  <th scope="col">Allocated Budget</th>
                                                  <th scope="col">Increase by 10</th>
                                                  <th scope="col">Decrease by 10</th>
                                                  <th scope="col">Delete</th>
                                                </tr>
                                              </thead>
                                              
                                                <tbody>
                                                   
                                                {expenses.map((expense) => (
                                                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={"€" +expense.cost} />
                                                ))}
                                    
                                                </tbody>
                                    
                                            </table>
                                             
                                        );
                                                }

                                    else{
    
                                        return (
                                          
                                            <table className='table'>
                                                  <thead className="thead-light">
                                                <tr>
                                                  <th scope="col">Department</th>
                                                  <th scope="col">Allocated Budget</th>
                                                  <th scope="col">Increase by 10</th>
                                                  <th scope="col">Decrease by 10</th>
                                                  <th scope="col">Delete</th>
                                                </tr>
                                              </thead>
                                              
                                                <tbody>
                                                   
                                                {expenses.map((expense) => (
                                                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={"£" +expense.cost} />
                                                ))}
                                    
                                                </tbody>
                                    
                                            </table>
                                             
                                        );
                                                }
            
};

export default ExpenseList;

