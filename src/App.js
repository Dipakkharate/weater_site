import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Form from "./components/Form";

function App() {
  const [city, setCity] = useState("aurangabad");
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState("");
  const URL = `http://api.weatherapi.com/v1/current.json?key=6dee8d79f6e64572b2901727212004&q=${city}&aqi=no`;


  const handlegetdata = async () => {
    try {
      const { data } = await axios.get(URL)
      setWeatherData(data)
    } catch (error) {
      setError(error)
    }
  }
  useEffect(() => {
    handlegetdata()

  }, [city]);
  return (
    <div className="App">
      <h1>Weather App</h1>
      {weatherData != "" ? <>
        <Weather weatherData={weatherData} />
        <Form setCityApp={setCity} error={error} setError={setError} />
      </>
        : <>
          {error != null ? <h1>Can't found.</h1> : <div>Loading...</div>}</>
      }
    </div>
  );
}

export default App;
