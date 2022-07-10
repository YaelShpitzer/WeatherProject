import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { currentConditionsUrl, forecastUrl } from 'utils/api';
import {
  getLocationConditionsSuccess,
  getLocationConditionsError,
  getForecastSuccess,
  getForecastError,
} from './actions';
import { GET_LOCATION_CONDITIONS, GET_FORECAST } from './constants';

export function* getLocationConditions(action) {
  const requestURL = currentConditionsUrl(action.payload);
  try {
    const condtions = yield call(request, requestURL);
    yield put(getLocationConditionsSuccess(condtions[0]));
  } catch (err) {
    yield put(getLocationConditionsError(err));
  }
}
export function* getForecast(action) {
  const requestURL = forecastUrl(
    action.payload.locationKey,
    action.payload.isMetric,
  );
  try {
    const forecast = yield call(request, requestURL);
    yield put(getForecastSuccess(forecast));
  } catch (err) {
    yield put(getForecastError(err));
  }
}

export default function* forcastSaga() {
  yield takeLatest(GET_LOCATION_CONDITIONS, getLocationConditions);
  yield takeLatest(GET_FORECAST, getForecast);
}
