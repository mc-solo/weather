import { FaThermometerEmpty } from "react-icons/fa"
import { BiSolidDropletHalf } from "react-icons/bi"
import { FiWind } from "react-icons/fi"
import { MdKeyboardArrowUp } from "react-icons/md"
import { GiSunrise, GiSunset } from "react-icons/gi"

const TempAndDetails = () => {
    const verticalDetails = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: 'Real Feel',
            value: '22°'
        },
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: 'Real Feel',
            value: '22°'
        }, {
            id: 1,
            Icon: FaThermometerEmpty,
            title: 'Real Feel',
            value: '22°'
        }
    ]


    return (
        <div>
            {/* first part */}
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Rain</p>
            </div>

            {/* second part */}
            <div className="flex flex-row items-center justify-between py-3">

                <img src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt="weather icon"
                    className="w-20 "
                />
                <p className="text-5xl">34°</p>

                <div className="flex flex-col space-y-3 items-start">

                    <div className="flex font-light text-sm items- justify-center">
                        <FaThermometerEmpty size={18} className="mr-1" />
                        Real Feel: ,<span className="font-medium ml-1"> 34°   </span>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default TempAndDetails
