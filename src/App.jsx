import './App.css';
import Page from './Page';
import { FavouriteProvider, LocationProvider, WeatherProvider } from './providers';

function App() {

  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavouriteProvider>
            <Page />
          </FavouriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  )
}

export default App
