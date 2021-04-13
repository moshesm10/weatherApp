import { CHANGE_THEME, TOGGLE_SEARCH_PANEL } from '../actions/types';

const INITIAL_STATE = {
  theme: 'light',
  isSearchPanelOpen: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case TOGGLE_SEARCH_PANEL:
      return { ...state, isSearchPanelOpen: action.payload };
    default:
      return state;
  }
}