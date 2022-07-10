import { SET_FAVORITES } from './constants';

export const initialState = {
  favorites: JSON.parse(localStorage.getItem('Favorites')) || [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
