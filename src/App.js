import './App.css';
import { useState } from 'react';

const countries = [
  {
    name: "India",
    code: "IN",
    cities: ["Hyderabad", "Mumbai"]
  },
  {
    name: "United States",
    code: "USA",
    cities: ["Foster City", "Cupertino"]
  },
  {
    name: "Europe",
    code: "EU",
    cities: ["Paris", "France"]
  }
];

function App() {
  const [country,setCountry] = useState('');
  return (
    <div className="App">
      <h3>List of countries with their cities in the dropdown</h3>

      <select onChange = {(e)=>{
        //console.log(e.target.value);
        setCountry(e.target.value);
      }}>
      {countries.map((item,index)=>{
        return <option value= {index}>{item.name}</option>
      })}
      </select>

      <select>
        {/* //used optional chaining 
        //can also use short circuit evaluation {countries[country && countries[country].cities.map]} */}
        {countries[country]?.cities.map((item,index)=>{
          return <option value={index}>{item}</option>
        })}
      </select>
    </div>
  );
}

export default App;
