import React from "react";
import WeatherIMG from "../assets/weather-icon.webp";

export const WeatherItem = ({ title }: { title: string }) => {
  return (
    <div className="weather-item flex flex-col bg-[var(--secondary)] rounded-xl p-3">
      <img src={WeatherIMG} width={"70px"} />
      <h3 className="font-bold text-white text-2xl">{title}</h3>
    </div>
  );
};
