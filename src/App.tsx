import React, { useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWeather } from "./conexion/Conexion";
import { QueryWeatherParams, WeatherProps } from "./types/Types";
import { SearchBar } from "./components/SearchBar";
import { WeatherData } from "./components/WeatherData/WeatherData";

export const App = () => {
  const [queryWeather, setQueryWeather] = useState<QueryWeatherParams>({
    city: "italy",
  });

  const { isLoading, data, error } = useQuery({
    queryKey: ["weather", queryWeather],
    queryFn: () => getWeather(queryWeather),
  });

  return (
    <div className="app w-100 h-[100vh] flex justify-center items-center">
      <div className="appContainer w-[800px] h-[450px] bg-[var(--main)] rounded-[20px] shadow-md flex overflow-hidden p-5 gap-3">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">
            An error occurred: {(error as Error).message}
          </div>
        ) : (
          <WeatherData
            main={data?.main}
            weather={data?.weather}
            name={data?.name}
            wind={data?.wind}
          />
        )}
        <div className="flex flex-col gap-7 flex-1 p-10">
          <SearchBar
            onClick={(ref: React.RefObject<HTMLInputElement>) => {
              setQueryWeather({
                ...queryWeather,
                city: ref.current?.value || "italy",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
