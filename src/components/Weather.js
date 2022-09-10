import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <h1>
        {weatherData.location.name} / {weatherData.location.country}
      </h1>
      <div>
        <img src={weatherData.current.condition.icon} alt="" />
        <p style={{ padding: "0", margin: "0" }}>
          {weatherData.current.temp_c}&deg;C /{" "}
          {weatherData.current.condition.text}
        </p>
      </div>
      <h4>{weatherData.location.localtime}</h4>
    </div>
  );
};

export default Weather;
