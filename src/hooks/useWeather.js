import { useEffect, useState } from "react";
import { useLocationContext } from "./index";

const weather = {
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
}

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export default function useWeather() {
  const [weatherData, setWeatherData] = useState(weather);
  const [loading, setLoading] = useState({ state: false, message: '' });
  const [error, setError] = useState(null);
  const { location } = useLocationContext();
  useEffect(() => {
    if (location) {
      const { latitude, longitude } = location;
      fetchWeather(latitude, longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLoading({ state: true, message: 'Fetching location coordinates...' });
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      }, (error) => {
        setError(error);
        setLoading({ state: false, message: '' });
      });
    }

  }, [location]);

  const fetchWeather = async (latitude, longitude, units = 'metric') => {
    try {
      setLoading({ state: true, message: 'Fetching weather data...' });
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`);
      if (!response.ok) {
        throw new Error(`Fetch weather data failed: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      const formattedWeatherData = {
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
      };
      setWeatherData(formattedWeatherData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({ state: false, message: '' });
    }
  };

  return { weatherData, loading, error };
}
