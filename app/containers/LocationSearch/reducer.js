import {
  GET_LOCATIONS_LIST,
  GET_LOCATIONS_LIST_SUCCESS,
  GET_LOCATIONS_LIST_ERROR,
} from './constants';

export const initialState = {
  isLoading: false,
  locations: [],
  error: '',
};

const locationSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LOCATIONS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        locations: action.payload,
      };
    case GET_LOCATIONS_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationSearchReducer;
