export type QueryWeatherParams = {
  city?: string;
  zip?: string;
  cityid?: string;
};
export type SVGProps = {
  color?: string;
  width?: string;
  height?: string;
};

export interface WeatherProps {
  main?: {
    temp?: number;
    humidity?: number;
  };
  weather?: { description?: string; icon?: string }[];
  name?: string;
  wind?: { speed?: number };
}
