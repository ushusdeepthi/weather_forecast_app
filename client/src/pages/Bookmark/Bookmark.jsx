import React, { useContext, useEffect } from "react";
import moment from "moment";
import { WeatherContext } from "../../contexts/WeatherContext";
import WeatherData from "../../components/WeatherData/WeatherData";

const Bookmark = () => {
  const { weatherData, setWeatherData, bookmark, setBookmark } =
    useContext(WeatherContext);

  useEffect(() => {}, []);
  const array = weatherData.filter((item) =>
    bookmark.includes(moment.utc(item.time).format("YYYY-MM-DD"))
  );
  const fullArray = [];
  bookmark.map((bookmark_item) => {
    const single_array = [];
    array.map((item) => {
      if (bookmark_item === moment.utc(item.time).format("YYYY-MM-DD")) {
        single_array.push(item);
      }
    });
    fullArray.push(single_array);
    fullArray.sort((a, b) =>
      moment.utc(a[0].time, "YYYY-MM-DD").diff(moment(b[0].time, "YYYY-MM-DD"))
    );
  });
  console.log(fullArray, "FULL ARRAY");
  return (
    <div>
      {!fullArray.length > 0 ? (
        <h1>NO BOOKMARKS TO SHOW </h1>
      ) : (
        fullArray.map((item, i) => {
          return <WeatherData key={i} data={item} />;
        })
      )}
    </div>
  );
};

export default Bookmark;
