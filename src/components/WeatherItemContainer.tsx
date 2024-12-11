import React from "react";
import { WeatherProps } from "../types/Types";
import { WeatherItem } from "./WeatherItem";

export const WeatherItemContainer = ({
  data,
}: {
  data: Array<WeatherProps>;
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.length > 0 &&
        data.map((element) => {
          return (
            <WeatherItem
              title={element.name || ""}
              icon={element.weather[0].icon || ""}
            />
          );
        })}
    </div>
  );
};
