import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLocationSearchDomain = state =>
  state.locationSearch || initialState;

const makeSelectLocations = () =>
  createSelector(
    selectLocationSearchDomain,
    state => state.locations,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectLocationSearchDomain,
    state => state.isLoading,
  );

const makeSelectLocationSearchError = () =>
  createSelector(
    selectLocationSearchDomain,
    state => state.error,
  );

export {
  makeSelectLocations,
  makeSelectIsLoading,
  makeSelectLocationSearchError,
};
