
import CloudIcon from '../../assets/cloud.svg';
import HazeIcon from '../../assets/haze.svg';
import SnowIcon from '../../assets/icons/snow.svg';
import SunnyIcon from '../../assets/icons/sunny.svg';
import RainIcon from '../../assets/rainy.svg';
import ThunderIcon from '../../assets/thunder.svg';

import PinIcon from '../../assets/pin.svg';
import { useWeatherContext } from "../../hooks";
import { getFormattedTime } from '../../utils/date-util';

function WeatherHeadline() {
  const { weatherData } = useWeatherContext();

  const getWeatherIcon = (weather) => {
    switch (weather.toLowerCase()) {
      case 'clouds':
        return CloudIcon;
      case 'haze':
        return HazeIcon;
      case 'rain':
        return RainIcon;
      case 'snow':
        return SnowIcon;
      case 'thunderstorm':
        return ThunderIcon;
      case 'clear':
        return SunnyIcon;
      case 'mist':
        return HazeIcon;
      case 'smoke':
        return HazeIcon;
      case 'sunny':
        return SunnyIcon;
      default:
        return CloudIcon;
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(weatherData.climate)} alt={weatherData.climate} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(weatherData.temperature)}°</h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} />
            <h2 className="text-2xl lg:text-[50px]">{weatherData.location}</h2>
          </div>
        </div>
      </div>
      {/* <p className="text-sm lg:text-lg">06:09 - Sunday, 9 Dec ‘23</p> */}
      {weatherData.time && (
        <p className="text-sm lg:text-lg">{getFormattedTime(weatherData.time, 'time')} {getFormattedTime(weatherData.time, 'date')} </p>
      )}
    </div>
  );
};
export default WeatherHeadline;