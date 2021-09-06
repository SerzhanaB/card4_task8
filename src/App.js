import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const lang= ['html', 'css', 'js', 'php']
  return (
    <div class='card' >
      <h2>Задание 8</h2>
            <ul> 
{lang.map((item,index)=> <li key={index.toString()}>{item}</li>)}

            </ul>
    </div>
  );
}



export default App;
