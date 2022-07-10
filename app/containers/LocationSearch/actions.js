import {
  GET_LOCATIONS_LIST,
  GET_LOCATIONS_LIST_SUCCESS,
  GET_LOCATIONS_LIST_ERROR,
} from './constants';

export function getLoactions(userInput) {
  return {
    type: GET_LOCATIONS_LIST,
    payload: userInput,
  };
}
export function getLoactionsSuccess(loactions) {
  return {
    type: GET_LOCATIONS_LIST_SUCCESS,
    payload: loactions,
  };
}
export function getLoactionsError(error) {
  return {
    type: GET_LOCATIONS_LIST_ERROR,
    payload: error,
  };
}
export function resetError() {
  return {
    type: GET_LOCATIONS_LIST_ERROR,
    payload: '',
  };
}
