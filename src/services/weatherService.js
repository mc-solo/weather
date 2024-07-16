import { DateTime } from "luxon";

const API_KEY = '60c0433e154c073b08503076cdc2b0da';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(`${BASE_URL}${infoType}`);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Response was not okay!');
        } else {
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.warn('Error encountered during data fetch:', error.message);
    }
};

// Export default getWeatherData if needed

// Formats the epoch to local time using the luxon lib
const formatToLocalTime = (secs, offset, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => {
    return DateTime.fromSeconds(secs + offset, { zone: 'utc' }).toFormat(format)
}

// this formats the current data from the api call
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
        lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, country,
        sunrise, sunset, details, icon, speed, formattedLocalTime
    };
};

// Gets the formatted data from the above function
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)

    // Proper error handling
    if (data) {
        return formatCurrent(data);
    } else {
        throw new Error('Could not fetch weather data');
    }
};

export default getFormattedWeatherData