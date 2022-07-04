import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastDate, setForecastDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [singleData, setSingleData] = useState(null);
  const [bookmark, setBookmark] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const date = moment().format("YYYY-MM-DD");
  //     console.log(date);
  //     const response = await axios.get(`http://localhost:8000/api/forecast/`);
  //     setWeatherData(response.data);
  //   } catch {}
  // };
  const weatherContextValue = {
    weatherData,
    setWeatherData,
    forecastDate,
    setForecastDate,
    singleData,
    setSingleData,
    bookmark,
    setBookmark,
  };
  return (
    <WeatherContext.Provider value={weatherContextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
