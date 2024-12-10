import React from "react";
import { Info } from "../Info";
import { Icons } from "../../assets/Icons";
import { Title } from "../Title";
import WeatherImage from "../../assets/weather-icon.webp";
import { WeatherProps } from "../../types/Types";

export const WeatherData = ({
  main = {},
  weather = [],
  name = "Unknown Location",
  wind = {},
}: WeatherProps) => {
  const { temp, humidity } = main;
  const { description, icon } = weather[0] || {}; // Safely access the first item in the weather array
  const { speed } = wind;

  return (
    <div className="weather-data flex flex-col justify-center gap-2 p-2 border-r-2 border-white flex-[0.6]">
      <div className="weather-head flex flex-col items-center justify-center">
        <div className="image w-[160px]">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather icon"
            className="w-[160px]"
          />
        </div>
        <Title title={name} /> {/* Use the dynamic city name */}
      </div>
      <div className="flex flex-col gap-3">
        <Info Icon={Icons.Wind} data={speed ?? "N/A"} split="/" format="km" />{" "}
        {/* Use wind speed dynamically */}
        <Info Icon={Icons.Temperature} data={temp ?? "N/A"} format="°" />{" "}
        {/* Use temp dynamically */}
        <Info Icon={Icons.Humidity} data={humidity ?? "N/A"} />{" "}
        {/* Use humidity dynamically */}
      </div>
    </div>
  );
};
