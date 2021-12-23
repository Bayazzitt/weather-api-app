import React, {useState} from 'react';
import './App.css';
import WeatherResult from './WeatherResult';

function App() {
  const APP_KEY="306ce082bf424b778d3104150212312"
  let cityinput=""
  const [weatherdata, setweatherdata] = useState([])
  function citytext() {
    document.querySelector("input").addEventListener("input", (e) => {
      e.preventDefault();
      cityinput= e.target.value;
      console.log(cityinput)
    } )
  }
async function getdata(value) {
  const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3`)
  const result = await data.json();
  setweatherdata(result.forecast.forecastday)
  console.log(result.forecast.forecastday)
}
  return (
    <div>
      <div className=" search d-flex justify-content-center mt-5">
        <input className='input-group-text' type="text" placeholder='Search City...' onChange={ citytext } />
        <button type="button" class="btn btn-warning" onClick={() => getdata(cityinput)}>Search</button>
      </div>
      {weatherdata.map(item=> (<WeatherResult key={item.date} date={item.date} mintemp={item.day.mintemp_c} maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon}/>))}
    </div>
  );
}

export default App;
