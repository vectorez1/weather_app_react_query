import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWeather } from "./conexion/Conexion";
import { QueryWeatherParams } from "./types/Types";

export const App = () => {
  const queryClient = useQueryClient();
  const [weatherData, setWeatherData] = useState();
  const [queryWeather, setQueryWeather] = useState<QueryWeatherParams>({
    city: "london",
  });
  const { isLoading, data, error } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather(queryWeather),
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  return <div>{data.name}</div>;
};
