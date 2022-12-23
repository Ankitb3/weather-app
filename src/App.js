import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import googlemap from "../src/google-maps.png";
// import bgimage from '../src/bgimg.jpg'
import cloudyimg from "../src/cloudy.png";
import img from "../src/weather-news.png";
import forcast from "../src/forcaster.png";

import swal from 'sweetalert'
function App() {
  const [city, setCity] = useState("Nagpur");
  const [temp, setTemp] = useState(0);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=73ba4ed59fd3b370d4f178d831d3833a`
      );
      if (response.status == 200) {
        const temp = response.data.main.temp - 273.15;
        setTemp(Math.round(temp));
      }
   
console.log(response)
      if(temp){

swal("fecth successfully", "", "success");      }
      setDesc(response.data.weather[0].main);
    }
    loadData();
  }, [city]);


  

  return (
    <>
      <div className="main_container">
        <h1 className="app-title">
          Weather app <img src={img} alt="headimg" className="headimg" />
        </h1>
        <div className="search-container">
          <img src={googlemap} className="icon-location" />
          <input
            type="text"
            placeholder="enter city name"
            className="input-city "
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        {/* <h3>city:{city} </h3>
        <h2>
          Tempratur: {temp} <sup>o</sup>c
        </h2> */}
        <div className="temp_section">
          <div className="img">
            <img src={cloudyimg} alt="cloud-img" className="cloudy-img" />
          </div>
          <div className="temp">
            Temprature: {temp} <sup>o</sup>c
          </div>
          <div className="describtion">Description: {desc}</div>
        </div>
        <div className="image">
          <img src={forcast} alt="boy" className="forcast" />
        </div>
      </div>
    </>
  );
}

export default App;
