const Forecast = () => {

    const data = [1, 2, 3, 4, 5]
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className=" font-medium uppercase ">3 hour step forecast</p>
            </div>
            <hr className="my-1" />

            <div className="flex items-center justify-between">
                {data.map((data, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center">

                        <p className="font-light text-sm">Fri </p>
                        <img
                            src="http://openweathermap.org/img/wn/01d@2x.png"
                            alt="weather icon"
                            className="w-12  my-1"
                        />

                        <p className="font-medium">47°</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Forecast 