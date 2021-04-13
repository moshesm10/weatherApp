import { CHANGE_CITY, HAS_ERROR, LOAD } from "../actions/types"

const INITIAL_STATE = {
  currentCity: null,
  previousCities: [],
  error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        error: null,
        currentCity: action.payload,
        previousCities:
          [
            { id: action.payload["place_id"], name: action.payload.namedetails["name:ru"] || action.payload.namedetails.name },
            ...state.previousCities
          ]
      }
    case HAS_ERROR:
      return { ...state, error: 'Упс! Город не найден, попробуйте другой' };
    default:
      return state;
  }
}