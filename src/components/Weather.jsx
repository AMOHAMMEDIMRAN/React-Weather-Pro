import { FiSearch } from "react-icons/fi";
import { TiWeatherSunny } from "react-icons/ti";

const Weather = () => {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center ">
      <div className="weather-container w-[280px] h-[400px] bg-[#3030f8] rounded-[30px]">
        <div className="search-bar flex items-center justify-around my-[20px]">
          <input
            type="text"
            placeholder="Search city"
            className="input rounded-[50px] input-info w-[90] max-w-xs bg-[#fff]"
          />
          <FiSearch size={26} color="#000" />
        </div>
        <div className="weather-condition">
          <div className="flex justify-evenly items-center flex-col-reverse">
            <TiWeatherSunny size={130} color="#ffa201" />
            <h2 className="text-[55px] font-bold text-[#fff]">16°C</h2>
          </div>
          <div className="location flex justify-center">
            <h1 className="text-[55px] font-bold text-[#fff]">London</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
