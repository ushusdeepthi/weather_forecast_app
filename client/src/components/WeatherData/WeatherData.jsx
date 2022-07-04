import React, { useState, useContext } from "react";
import moment from "moment";
import * as S from "./styled";
import { WeatherContext } from "../../contexts/WeatherContext";
import {
  WiCelsius,
  WiSnow,
  WiRain,
  WiUmbrella,
  WiThermometer,
  WiStrongWind,
} from "weather-icons-react";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbTemperaturePlus, TbTemperatureMinus } from "react-icons/tb";

const WeatherData = ({ data }) => {
  const [showDetail, setShowDetail] = useState(false);
  const { forecastDate, bookmark, setBookmark } = useContext(WeatherContext);
  //   console.log(data);
  const temp = data.map((item) => Math.round(item.t.value)).sort();
  //   console.log(temp[0]);
  const now = moment().format("HH");
  const data_now = data.filter(
    (item) => moment.utc(item.time).format("HH") === now
  );
  console.log("now dat .............", data_now);

  //   console.log("NOW", now);
  //   console.log("temp", temp);
  const weather_info = {
    0: "No precipitation",
    1: <WiSnow />,
    2: "Snow and rain",
    3: <WiRain />,
    4: "Drizzle",
    5: "Freezing rain",
    6: "Freezing drizzle",
  };
  const handleClick = (date) => {
    if (bookmark.includes(date)) {
      const new_bookmarks = bookmark.filter((item) => item !== date);
      setBookmark(new_bookmarks);
    } else {
      setBookmark([...bookmark, date]);
    }
  };
  console.log("bookmark", bookmark);
  return (
    <S.Container>
      {moment.utc(data[0].time).format("YYYY-MM-DD") ===
        moment().format("YYYY-MM-DD") && <h1>Today's report</h1>}
      <S.Card>
        {/* <S.MainSection> */}
        {/* <div> */}

        <h2>{moment.utc(data[0].time).format("MMM DD")}</h2>
        <WiSnow size={120} />
        {moment.utc(data[0].time).format("YYYY-MM-DD") ===
          moment().format("YYYY-MM-DD") && (
          <p>
            <WiThermometer size={36} />
            {Math.round(data_now[0].t.value)}
            <WiCelsius size={38} />
          </p>
        )}
        <p>
          <TbTemperaturePlus size={36} /> {temp[temp.length - 1]}{" "}
          <WiCelsius weight={900} size={38} />
        </p>
        <p>
          <TbTemperatureMinus size={36} /> {temp[0]} <WiCelsius size={38} />
        </p>
        {moment.utc(data[0].time).format("YYYY-MM-DD") ===
          moment().format("YYYY-MM-DD") && (
          <>
            <p>
              <WiUmbrella size={36} />
              {data_now[0].pmean.value} mm
            </p>
            <p>
              <WiStrongWind size={36} />
              {Math.round(data_now[0].ws.value)} {data_now[0].ws.unit}{" "}
              {Math.round(data_now[0].gust.value)} {data_now[0].gust.unit}
            </p>
          </>
        )}
        {/* </div> */}

        <S.ButtonBookmark
          onClick={() =>
            handleClick(moment.utc(data[0].time).format("YYYY-MM-DD"))
          }
        >
          {bookmark.includes(moment.utc(data[0].time).format("YYYY-MM-DD")) ? (
            <FaStar size={40} color="#EAAA00" />
          ) : (
            <FiStar size={40} />
          )}
        </S.ButtonBookmark>
        <S.ButtonDetail onClick={() => setShowDetail(!showDetail)}>
          {showDetail ? (
            <IoIosArrowUp size={60} />
          ) : (
            <IoIosArrowDown size={60} />
          )}
        </S.ButtonDetail>
        {/* </S.MainSection> */}
      </S.Card>
      {showDetail && (
        <S.TableStyled>
          <thead>
            <th>Time</th>
            <th>Weather</th>
            <th>Precipitation</th>
            <th>Wind m/s (gust)</th>
            <th>Humidity %</th>
            <th>Air Pressure hPa</th>
            <th>Visibility Km</th>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{moment.utc(item.time).format("HH")}</td>
                  <td>
                    {Math.round(item.t.value)} {item.t.unit}
                  </td>
                  <td>{item.pmean.value}</td>
                  <td>
                    {Math.round(item.ws.value)}({Math.round(item.gust.value)})
                  </td>
                  <td>{item.r.value}</td>
                  <td>{Math.round(item.msl.value)}</td>
                  <td>{item.vis.value}</td>
                </tr>
              );
            })}
          </tbody>
        </S.TableStyled>
      )}
    </S.Container>
  );
};

export default WeatherData;
