import { SET_FAVORITES } from './constants';

export const setFavorites = favorites => ({
  type: SET_FAVORITES,
  payload: favorites,
});
