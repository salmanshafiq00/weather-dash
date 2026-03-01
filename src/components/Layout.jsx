import ClearSkyImage from '../assets/backgrounds/clear-sky.jpg';
import FewCloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "../assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "../assets/backgrounds/sunny.jpg";
import ThunderStormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";
import { useWeatherContext } from '../hooks';

function Layout({ children }) {
  const { weatherData } = useWeatherContext();

  const defaultBackground = ClearSkyImage;

  const climateImage = weatherData.climate
    ? (() => {
      switch (weatherData.climate) {
        case "Rain": return RainyDayImage;
        case "Clouds": return ScatterdCloudsImage;
        case "Clear": return ClearSkyImage;
        case "Snow": return SnowImage;
        case "Thunder": return ThunderStormImage;
        case "Fog": return WinterImage;
        case "Haze": return FewCloudsImage;
        case "Mist": return MistImage;
        default: return ClearSkyImage;
      }
    })()
    : defaultBackground;
  console.log(climateImage)
  return (
    <div
      style={{ backgroundImage: `url(${climateImage})` }}
      className="grid place-items-center h-screen bg-no-repeat bg-cover">
      {children}
    </div>
  );
};
export default Layout;