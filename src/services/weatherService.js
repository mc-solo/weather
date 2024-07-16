import { DateTime } from "luxon";

const API_KEY = '60c0433e154c073b08503076cdc2b0da';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(`${BASE_URL}${infoType}`);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

    return fetch(url).then((res) => res.json())
};

const iconUrlFromCode = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

const formatToLocalTime =
    (secs, offset, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs + offset, { zone: 'utc' }).toFormat(format)




const formatCurrent = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name, dt, sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
        timezone,
    } = data;

    const { main: details, icon } = weather[0]
    const formattedLocalTime = formatToLocalTime(dt, timezone)

    return {
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        country,
        sunrise: formatToLocalTime(sunrise, timezone, 'hh:mm a'),
        sunset: formatToLocalTime(sunset, timezone, 'hh:mm a'),
        icon: iconUrlFromCode(icon),
        speed,
        formattedLocalTime,
        details
    };
};

// Gets the formatted data from the above function
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        'weather',
        searchParams
    ).then(formatCurrent)

    return { ...formattedCurrentWeather }
};

export default getFormattedWeatherData