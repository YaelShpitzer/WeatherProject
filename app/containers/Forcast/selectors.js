import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectForcastDomain = state => state.forcast || initialState;

const makeSelectIsLoading = () =>
  createSelector(
    selectForcastDomain,
    state => state.isLoading,
  );
const makeSelectLocation = () =>
  createSelector(
    selectForcastDomain,
    state => state.location,
  );
const makeSelectConditions = () =>
  createSelector(
    selectForcastDomain,
    state => state.conditions,
  );
const makeSelectForecast = () =>
  createSelector(
    selectForcastDomain,
    state => state.forecast,
  );
export {
  makeSelectIsLoading,
  makeSelectLocation,
  makeSelectConditions,
  makeSelectForecast,
};
