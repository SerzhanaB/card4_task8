import logo from './logo.svg';
import './App.css';

function App() {
  const lang= ['html', 'css', 'js', 'php']
  return (
    <div class='card' >
            <ul> 
{lang.map((item,index)=> <li key={index.toString()}>{item}</li>)}

            </ul>
    </div>
  );
}

export default App;
