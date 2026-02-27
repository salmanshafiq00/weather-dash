import './App.css';
import Page from './components/Page';
import { WeatherProvider } from './providers';

function App() {

  return (
    <>
      <WeatherProvider>
        <Page />
      </WeatherProvider>
    </>
  )
}

export default App
