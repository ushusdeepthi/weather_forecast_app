import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayRainWind,
  WiDayRainMix,
  WiRain,
} from "weather-icons-react";

const weather_symbol = {
  1: <WiDaySunny />,
  2: "Nearly clear sky",
  3: "Variable cloudiness",
  4: "Halfclear sky",
  5: "Cloudy sky",
  6: "Overcast",
  7: "Fog",
  8: <WiDayRainMix />,
  9: <WiDayRainWind />,
  10: <WiRain />,
  11: "Thunderstorm",
  12: "Light sleet showers",
  13: "Moderate sleet showers",
  14: "Heavy sleet showers",
  15: "Light snow showers",
  16: "Moderate snow showers",
  17: "Heavy snow showers",
  18: "Light rain",
  19: "Moderate rain",
  20: "Heavy rain",
  21: "Thunder",
  22: "Light sleet",
  23: "Moderate sleet",
  24: "Heavy sleet",
  25: "Light snowfall",
  26: "Moderate snowfall",
  27: "Heavy snowfall",
};

export default weather_symbol;
