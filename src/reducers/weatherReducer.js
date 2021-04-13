import { GET_WEATHER, TOGGLE_FETCHING } from '../actions/types';

const INITIAL_STATE = {
  daily: null,
  hourly: null,
  current: null,
  isFetching: true,
  isFirstInit: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, ...action.payload, isFirstInit: true };
    case TOGGLE_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
}