import axios from 'axios';

import { CHANGE_CITY, GET_WEATHER, HAS_ERROR, CHANGE_THEME, TOGGLE_FETCHING, TOGGLE_SEARCH_PANEL } from './types';
const API_KEY = '3a5b803351f9a2dd04c93ba38e648144';

export const changeTheme = () => async dispatch => {
  dispatch({ type: CHANGE_THEME });
};

export const toggleFetching = (isFetching) => async dispatch => {
  dispatch({ type: TOGGLE_FETCHING, payload: isFetching });
};

export const toggleSearchPanel = (isOpen) => async dispatch => {
  dispatch({ type: TOGGLE_SEARCH_PANEL, payload: isOpen });
};

export const changeCity = city => async (dispatch, getState) => {

  dispatch(toggleFetching(true));

  const response = await axios.get(`https://nominatim.openstreetmap.org/search.php?q=${city}&format=json&addressdetails=1&limit=1&namedetails=1`);

  if (response.data.length > 0) {
    dispatch({ type: CHANGE_CITY, payload: response.data[0] });

    const { lat, lon } = getState().cities.currentCity;
    dispatch(getWeatherInfo(lat, lon));
  } else {
    dispatch({ type: HAS_ERROR });
    dispatch(toggleFetching(false));
    dispatch(toggleSearchPanel(true));
  }
};

export const getWeatherInfo = (lat, lon) => async dispatch => {

  const request = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}&lang=ru&units=metric`;
  const response = await axios.get(request);


  dispatch({ type: GET_WEATHER, payload: response.data });
  dispatch(toggleFetching(false));
  dispatch(toggleSearchPanel(false));
};