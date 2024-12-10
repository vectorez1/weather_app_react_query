import React, { useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWeather } from "./conexion/Conexion";
import { QueryWeatherParams } from "./types/Types";
import { Title } from "./components/Title";
import { Info } from "./components/Info";
import { Icons } from "./assets/Icons";

export const App = () => {
  const queryClient = useQueryClient();
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState();
  const [queryWeather, setQueryWeather] = useState<QueryWeatherParams>({
    city: "london",
  });
  /*const { isLoading, data, error } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather(queryWeather),
  });*/

  return (
    <div className="app w-100 h-[100vh] flex justify-center items-center">
      <div className="appContainer w-[80%] h-[80vh] bg-[var(--main)] rounded-[20px] shadow-md flex items-center justify-center gap-3">
        <Title title="London" />
        <Info Icon={Icons.Wind} data="125" format="/km" />
        <Info Icon={Icons.Temperature} data="34" format="°" />
      </div>
    </div>
  );
};
