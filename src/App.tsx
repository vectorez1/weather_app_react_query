import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./conexion/Conexion";
import { QueryWeatherParams, WeatherProps } from "./types/Types";
import { SearchBar } from "./components/SearchBar";
import { WeatherData } from "./components/WeatherData/WeatherData";
import { WeatherItemContainer } from "./components/WeatherItemContainer";

export const App = () => {
  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null);
  const [thing, setThing] = useState<Array<WeatherProps | null>>([]);
  const [queryWeather, setQueryWeather] = useState<QueryWeatherParams>({
    city: "Santo Domingo",
  });

  const { isLoading, data, isError } = useQuery({
    queryKey: ["weather", queryWeather],
    queryFn: () => getWeather(queryWeather),
  });

  useEffect(() => {
    if (weatherData) {
      setThing((prev) => {
        // Avoid duplicates
        if (prev.length > 0 && prev[0] === weatherData) {
          return prev; // Return previous state without changes
        }
        const updated = [weatherData, ...prev];
        return updated.slice(0, 4); // Keep only the last 4 entries
      });
    }
  }, [weatherData]);

  return (
    <div className="app w-100 h-[100vh] flex justify-center items-center">
      <div className="appContainer flex justify-center w-[800px] h-[450px] bg-[var(--main)] rounded-[20px] shadow-md  overflow-hidden p-5 border-solid border-[var(--secondary)] border-[2px] ">
        <WeatherData
          isLoading={isLoading}
          data={data}
          weatherData={weatherData}
          setWeatherData={setWeatherData}
        />
        <div className="flex flex-col gap-7 flex-1 p-10">
          <SearchBar
            onClick={(ref: React.RefObject<HTMLInputElement>) => {
              setQueryWeather({
                ...queryWeather,
                city: ref.current?.value || "italy",
              });
            }}
          />

          {thing.length > 0 && data && <WeatherItemContainer data={thing} />}
          {isError && <h2 className="text-red-500">{"Error Fetching Data"}</h2>}
        </div>
      </div>
    </div>
  );
};
