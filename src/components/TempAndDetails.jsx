import { FaThermometerEmpty } from "react-icons/fa"
import { BiSolidDropletHalf } from "react-icons/bi"
import { FiWind } from "react-icons/fi"
import { MdKeyboardArrowUp } from "react-icons/md"
import { GiSunrise, GiSunset } from "react-icons/gi"

const TempAndDetails = () => {
    return (
        <div>
            {/* first part */}
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Rain</p>
            </div>

            {/* second part */}
            <div className="flex flex-row items-center justify-between py-3
            ">

                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />

            </div>
        </div>
    )
}

export default TempAndDetails
