import React from 'react';
function App2() {
    const mass= [1,2,3,4,5]
    return (
        <div>
      <div class='card' >
        <h2>Задание 9</h2>
        <h3>Исходный массив</h3>
              
      
  {mass.map((item,index)=> <span key={index.toString()}>{item}, </span>)}
  

            
              <h3> Полученный массив</h3>
              <span> 
  {mass.map((item,index)=> <span key={index.toString()}>{item*3}, </span>)}
  
              </span>
  
      </div>
      </div>
    );
  }
  
  export default App2;