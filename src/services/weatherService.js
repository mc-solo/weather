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

export default getWeatherData;
