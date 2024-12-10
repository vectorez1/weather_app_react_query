import axios from "axios";
import { QueryWeatherParams } from "../types/Types.ts";
const URL = "https://api.openweathermap.org/data/2.5";
const API_KEY: string = import.meta.env.VITE_WEATHER_KEY || "";

const weatherApi = axios.create({
  baseURL: URL,
  params: { appid: API_KEY, units: "metric" }, // Default params
});

export const getWeather = async ({ city, zip, cityid }: QueryWeatherParams) => {
  try {
    // Dynamically include only valid parameters
    const params: Record<string, string> = {};
    if (city) params.q = city;
    if (zip) params.zip = zip;
    if (cityid) params.id = cityid;

    const response = await weatherApi.get("/weather", { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
