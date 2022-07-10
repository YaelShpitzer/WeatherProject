import {
  SET_LOCATION_SELECTED,
  GET_LOCATION_CONDITIONS,
  GET_LOCATION_CONDITIONS_SUCCESS,
  GET_LOCATION_CONDITIONS_ERROR,
  GET_FORECAST,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_ERROR,
} from './constants';

export const setSelectedLocation = location => ({
  type: SET_LOCATION_SELECTED,
  payload: location,
});
export function getLocationConditions(locationKey) {
  return {
    type: GET_LOCATION_CONDITIONS,
    payload: locationKey,
  };
}
export function getLocationConditionsSuccess(conditions) {
  return {
    type: GET_LOCATION_CONDITIONS_SUCCESS,
    payload: conditions,
  };
}
export function getLocationConditionsError(error) {
  return {
    type: GET_LOCATION_CONDITIONS_ERROR,
    payload: error,
  };
}
export function getForecast(locationKey, isMetric) {
  return {
    type: GET_FORECAST,
    payload: { locationKey, isMetric },
  };
}
export function getForecastSuccess(forecast) {
  return {
    type: GET_FORECAST_SUCCESS,
    payload: forecast,
  };
}
export function getForecastError(error) {
  return {
    type: GET_FORECAST_ERROR,
    payload: error,
  };
}
