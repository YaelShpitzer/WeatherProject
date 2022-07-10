import { SET_TEMP_TYPE } from './constants';

export const setTempType = isMetric => ({
  type: SET_TEMP_TYPE,
  payload: isMetric,
});
