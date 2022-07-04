import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import moment from "moment";
import * as S from "./styled";
import { Link } from "react-router-dom";
import { WeatherContext } from "../../contexts/WeatherContext";
import WeatherData from "../../components/WeatherData/WeatherData";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const HomePage = () => {
  const {
    weatherData,
    setWeatherData,
    forecastDate,
    setForecastDate,
    setSingleData,
    singleData,
  } = useContext(WeatherContext);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (weatherData) {
      getdataByDate();
    }
  }, [weatherData, forecastDate]);

  const fetchData = async () => {
    try {
      const date = moment().format("YYYY-MM-DD");
      console.log(date);
      const response = await axios.get(`http://localhost:8000/api/forecast`);
      setWeatherData(response.data);
    } catch {}
  };
  const getdataByDate = async () => {
    console.log(forecastDate, "forecastdate");

    const data = await weatherData.filter((item) =>
      moment.utc(forecastDate).isSame(item.time, "day")
    );
    console.log("data....", data);
    setSingleData(data);
  };
  const handleClickNext = () => {
    const coming_forecast = moment(forecastDate);
    coming_forecast.add(1, "days");
    setForecastDate(coming_forecast.format("YYYY-MM-DD"));
  };
  const handleClickPrevious = () => {
    const coming_forecast = moment(forecastDate);
    coming_forecast.subtract(1, "days");
    setForecastDate(coming_forecast.format("YYYY-MM-DD"));
  };

  return (
    <div>
      {!singleData && <h1>Loading....</h1>}
      {singleData && <WeatherData data={singleData} />}
      {singleData && (
        <S.Container>
          <S.Button
            onClick={handleClickPrevious}
            disabled={forecastDate === moment().format("YYYY-MM-DD")}
          >
            <IoIosArrowBack size={25} />
          </S.Button>
          <S.Button
            onClick={handleClickNext}
            disabled={
              forecastDate ===
              moment
                .utc(weatherData[weatherData.length - 1].time)
                .format("YYYY-MM-DD")
            }
          >
            <IoIosArrowForward size={25} />
          </S.Button>
        </S.Container>
      )}
    </div>
  );
};

export default HomePage;
