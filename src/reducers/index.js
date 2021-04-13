import { combineReducers } from "redux";
import weatherReducer from './weatherReducer';
import citiesReducer from './citiesReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  weather: weatherReducer,
  cities: citiesReducer,
  settings: settingsReducer
});