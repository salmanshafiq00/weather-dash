import { useWeatherContext } from "../../hooks";
import ToggleFavourite from "./ToggleFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";

function WeatherBoard() {
  const { weatherData, loading, error } = useWeatherContext();
  return (
    <div
      className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-6">
        {
          loading.state ? (
            <div className="col-span-full text-center text-white/80">
              <p>{loading.message}</p>
            </div>
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              <p>{error.message}</p>
            </div>
          ) : (
            <div className="col-span-full text-center text-white/80">
              <p>Weather data for {weatherData.location}</p>
            </div>
          )
        }
        <ToggleFavourite />
        <WeatherHeadline />
        <WeatherCondition />
      </div>
    </div>
  );
};
export default WeatherBoard;