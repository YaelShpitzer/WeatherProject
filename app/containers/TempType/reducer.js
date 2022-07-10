import { SET_TEMP_TYPE } from './constants';

export const initialState = {
  isMetric: true,
};

const tempTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMP_TYPE:
      return {
        ...state,
        isMetric: action.payload,
      };
    default:
      return state;
  }
};

export default tempTypeReducer;
