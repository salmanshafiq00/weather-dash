import './App.css';
import Page from './components/Page';
import { FavouriteProvider, WeatherProvider } from './providers';

function App() {

  return (
    <>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </>
  )
}

export default App
