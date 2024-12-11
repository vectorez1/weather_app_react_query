import React, { useEffect, useState } from "react";
import { Info } from "../Info";
import { Icons } from "../../assets/Icons";
import { Title } from "../Title";
import { WeatherProps } from "../../types/Types";
import { LoadingIcon } from "../LoadingIcon";

export const WeatherData = ({
  isLoading,
  data,
  setWeatherData,
  weatherData,
}: {
  isLoading: boolean;
  data?: WeatherProps;
  setWeatherData;
  weatherData;
}) => {
  // Update state when `data` changes
  useEffect(() => {
    if (data) {
      setWeatherData(data);
    }
  }, [data]);

  if (!weatherData) {
    return null; // Render nothing if no data
  }

  // Destructure safely with defaults
  const {
    main = {},
    weather = [{}],
    wind = {},
    name = "Unknown",
  } = weatherData;
  const { temp = "N/A", humidity = "N/A" } = main;
  const { description = "N/A", icon } = weather[0] || {};
  const { speed = "N/A" } = wind;

  return (
    <div className="weather-data flex flex-col justify-center gap-5 p-2 border-r-2 border-white flex-[0.8]">
      {isLoading && (
        <div className=" absolute top-40">
          <LoadingIcon />
        </div>
      )}
      <div className="weather-head flex flex-col items-center justify-center">
        <div className="image w-[160px]">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather icon"
            className="w-[160px]"
          />
        </div>
        <Title title={name} /> {/* Dynamic city name */}
        <h3 className="description mt-2 font-bold text-white text-1xl capitalize underline">
          {description}
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Info Icon={Icons.Wind} data={speed} split="/" format="km/h" />
        <Info Icon={Icons.Temperature} data={temp} format="°C" />
        <Info Icon={Icons.Humidity} data={humidity} />
      </div>
    </div>
  );
};
