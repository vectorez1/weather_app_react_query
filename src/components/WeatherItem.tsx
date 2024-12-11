import React from "react";
//import WeatherIMG from "../assets/weather-icon.webp";

export const WeatherItem = ({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) => {
  return (
    <div className="weather-item flex flex-col bg-[var(--secondary)] rounded-xl p-3">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        width={"70px"}
      />
      <h3 className="font-bold text-white text-2xl">{title}</h3>
    </div>
  );
};
