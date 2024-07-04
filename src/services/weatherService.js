const API_KEY = "60c0433e154c073b08503076cdc2b0da";
const BASE_URL = "https://api.openweathermap.org/data/2.5 ";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
};
