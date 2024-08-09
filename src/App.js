
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
      < li className='city1'> <Weather City = "Tehran" value = {20} humidity ={50}/> </li>
      <li className='city2'> <Weather  City = "Yazd" value = {30} humidity ={20}/></li>
      <li className='city3'> <Weather City = "Kerman" value = {35}humidity ={10} /></li>
      <li className='city4'>
      <Weather City = "Esfehan" value = {25} /></li>
      </ul>
       </h2>
<h3> <Search/> </h3>
<search/>
    </div>
  );
}

export default App;
