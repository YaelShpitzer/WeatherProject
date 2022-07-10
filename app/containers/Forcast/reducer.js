import {
  SET_LOCATION_SELECTED,
  GET_LOCATION_CONDITIONS,
  GET_LOCATION_CONDITIONS_SUCCESS,
  GET_LOCATION_CONDITIONS_ERROR,
  GET_FORECAST,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_ERROR,
} from './constants';

export const initialState = {
  location: { name: 'Tel Aviv', key: '215854' },
  forecast: null,
  conditions: null,
  isLoading: false,
  error: '',
};

const forcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATION_CONDITIONS:
    case GET_FORECAST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LOCATION_CONDITIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        conditions: action.payload,
      };
    case GET_LOCATION_CONDITIONS_ERROR:
    case GET_FORECAST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_LOCATION_SELECTED:
      return {
        ...state,
        location: action.payload,
      };
    case GET_FORECAST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        forecast: action.payload,
      };
    default:
      return state;
  }
};
export default forcastReducer;
