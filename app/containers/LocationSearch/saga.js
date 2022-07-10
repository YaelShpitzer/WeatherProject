import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { locationsSearchUrl } from 'utils/api';
import { getLoactionsSuccess, getLoactionsError } from './actions';
import { GET_LOCATIONS_LIST } from './constants';

export function* getLoactions(action) {
  const requestURL = locationsSearchUrl(action.payload);
  try {
    const loactions = yield call(request, requestURL);
    yield put(getLoactionsSuccess(loactions));
  } catch (err) {
    yield put(getLoactionsError(err));
  }
}
export default function* contactListSaga() {
  yield takeLatest(GET_LOCATIONS_LIST, getLoactions);
}
