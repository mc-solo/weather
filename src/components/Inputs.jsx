import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  //   handle current location
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          setQuery({ lat: latitude, lon: longitude });
        },
        (err) => {
          console.error("location error", err);
        }
      );
    }
  };

  //   handle the search button
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-2/3 items-center justify-around max-w-screen-md space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search city..."
          className="text-gray-500 text-xl font-light p-2  shadow-xl  capitalize focus:outline-none rounded-[4px] w-full
                    placeholder:lowercase"
        />

        <BiSearch
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />

        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-2xl font-medium transition ease-out hover:scale-125">
          °C
        </button>
        <p className="text-4xl px-[2px] font-medium mx-1">|</p>
        <button className="text-2xl font-medium transition ease-out hover:scale-125">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
