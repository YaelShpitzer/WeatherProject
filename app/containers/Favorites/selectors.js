import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFavoritesDomain = state => state.favorites || initialState;

const makeSelectFavorites = () =>
  createSelector(
    selectFavoritesDomain,
    state => state.favorites,
  );

export { makeSelectFavorites };
