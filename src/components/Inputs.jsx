import { BiSearch, BiCurrentLocation } from "react-icons/bi"

const Inputs = () => {
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className="flex flex-row w-2/3 items-center justify-center space-x-4">
                <input
                    type="text"
                    placeholder="search city..."
                    className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none rounded-[4px]
                    placeholder:lowercase"
                />

                <BiSearch size={30}
                    className="cursor-pointer transition ease-out hover:scale-125"
                />

                <BiCurrentLocation size={30}
                    className="cursor-pointer transition ease-out hover:scale-125" />
            </div>

            <div className="flex flex-row w-1/4 items-center justify-center">

                <button className="text-2xl font-medium transition ease-out hover:scale-125">°C
                </button>
                <p className="text-4xl px-[2px] font-medium mx-1">|</p>
                <button className="text-2xl font-medium transition ease-out hover:scale-125">°F
                </button>
            </div>

        </div>

    )
}

export default Inputs
