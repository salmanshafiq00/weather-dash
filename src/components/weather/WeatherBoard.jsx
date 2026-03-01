import { useWeatherContext } from "../../hooks";
import ToggleFavourite from "./ToggleFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";

function WeatherBoard() {
  const { weatherData, loading, error } = useWeatherContext();

  if (loading.state) {
    return (
      <div className="col-span-full text-center text-white/80 py-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white/50"></div>
          <p className="text-lg font-medium">{loading.message}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-span-full text-center text-red-500 py-10">
        <p className="text-lg">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-6">
        <div className="col-span-full text-center text-white/80">
          <p className="text-lg">Weather data for {weatherData.location}</p>
        </div>
        <ToggleFavourite />
        <WeatherHeadline />
        <WeatherCondition />
      </div>
    </div>
  );
}

export default WeatherBoard;