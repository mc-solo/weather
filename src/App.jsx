import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useState, useEffect } from "react";

const App = () => {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const data = await getFormattedWeatherData({ q: "berlin" }).then((data) => {
      setWeather(data);
    });
    // console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);
  getWeather();

  return (
    <div className="mx-auto max-w-screen-2xl min-w-full  py-2 px-20 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 text-2xl">
      <TopButtons />
      <Inputs />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast />
          <Forecast />
        </>
      )}
    </div>
  );
};

export default App;
