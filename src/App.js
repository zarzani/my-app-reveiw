
import './App.css';
import Weather  from "./Weather";
import Search from './Search';



function App() {
  return (
    <div className="App">
      
       
      <header>
      <h1 className="myName" > Zahra Arzani </h1>  
      </header>

      <h2>
        <ul>
      < li className='city1'> <Weather City = "Tehran" temperature = {8} humidity ={50}/> </li>
      <li className='city2'> <Weather  City = "Yazd" temperature = {30} humidity ={20}/></li>
      <li className='city3'> <Weather City = "Kerman" temperature = {35}humidity ={10} /></li>
      
      </ul>
       </h2>
<h3> <Search/> </h3>
<search/>
    </div>
  );
}

export default App;
