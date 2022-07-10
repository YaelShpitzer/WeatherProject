import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTempTypeDomain = state => state.tempType || initialState;

const makeSelectIsMetric = () =>
  createSelector(
    selectTempTypeDomain,
    state => state.isMetric,
  );

export { makeSelectIsMetric };
