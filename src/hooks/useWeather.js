import { useEffect, useState } from "react";
import { useLocationContext } from "./index";

const defaultWeather = {
  location: '',
  climate: '',
  description: '',
  temperature: '',
  maxTemperature: '',
  minTemperature: '',
  humidity: '',
  cloudPercentage: '',
  wind: '',
  time: '',
  longitude: '',
  latitude: ''
};

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export default function useWeather() {
  const [weatherData, setWeatherData] = useState(defaultWeather);
  const [loading, setLoading] = useState({ state: true, message: 'Initializing...' });
  const [error, setError] = useState(null);
  const { location } = useLocationContext();

  useEffect(() => {
    const fetchWeather = async (latitude, longitude, units = 'metric') => {
      try {
        setLoading({ state: true, message: 'Fetching weather data...' });
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
        );
        if (!response.ok) {
          throw new Error(`Fetch weather data failed: ${response.statusText}`);
        }
        const data = await response.json();
        setWeatherData({
          location: data.name,
          climate: data.weather[0].main,
          description: data.weather[0].description,
          temperature: data.main.temp,
          maxTemperature: data.main.temp_max,
          minTemperature: data.main.temp_min,
          humidity: data.main.humidity,
          cloudPercentage: data.clouds.all,
          wind: data.wind.speed,
          time: data.dt,
          longitude: data.coord.lon,
          latitude: data.coord.lat
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading({ state: false, message: '' });
      }
    };

    // Use location from context if available
    if (location) {
      const { latitude, longitude } = location;
      fetchWeather(latitude, longitude);
    }
    // Otherwise, use geolocation API
    else if (navigator.geolocation) {
      setLoading({ state: true, message: 'Fetching location coordinates...' });
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (err) => {
          setError(err);
          setLoading({ state: false, message: '' });
        }
      );
    }
    else {
      setError(new Error('Geolocation is not supported.'));
      setLoading({ state: false, message: '' });
    }
  }, [location]);

  return { weatherData, loading, error };
}