import { useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { TiWeatherSunny } from "react-icons/ti";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (city) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );
        const data = response.data;
        setWeather(data);
      } catch (error) {
        console.log(`The error message ${error}`);
      }
    }
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center  ">
      <div className="weather-container w-[280px] h-[400px] bg-[#3030f8] rounded-[30px] ">
        <div className="search-bar flex items-center justify-around my-[20px]">
          <input
            type="text"
            placeholder="Search city"
            className="input rounded-[50px] input-info w-[90] max-w-xs bg-[#fff]"
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>
            <FiSearch size={26} color="#000" />
          </button>
        </div>
        {!weather && (
          <div className="flex justify-center">
          <h1 className="text-center text-[#fff] font-bold text-[35px]">
            Enter the city <br/> name to check <br/> the weather
          </h1>
        </div>
        )}
        {weather && (
          <div className="weather-condition">
            <div className="flex justify-evenly items-center flex-col">
              
              <h2 className="text-[55px] font-bold text-[#fff]">
                {Math.floor(weather.main.temp)}°C
              </h2>
              <p className="font-semibold text-[#fff]">{weather.weather[0].main}</p>
              <TiWeatherSunny size={130} color="#ffa201" />
            </div>
            <div className="location flex justify-center">
              <h1 className="text-[55px] font-bold text-[#fff]">
                {weather.name}
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Weather;
