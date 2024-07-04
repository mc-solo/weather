const API_KEY = "60c0433e154c073b08503076cdc2b0da";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url);


    const formatCurrent(data) => {
        const {
            coord: { lat, lon },
            main: { temp, feels_like, temp_min, temp_max, humidity },
            name,
            dt,
            sys: { country, sunrise, sunset },
            weather,
            wind: { speed },
            timezone,
        } = data;
    }
    const getFormattedWeatherData = async (searchParams) => {
        const formattedCurrentWeather = await getWeatherData(
            "weather",
            searchParams
        ).then();
    };
};
