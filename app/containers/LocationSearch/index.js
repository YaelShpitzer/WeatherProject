import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, CircularProgress } from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectLocations,
  makeSelectIsLoading,
  makeSelectLocationSearchError,
} from './selectors';
import reducer from './reducer';
import { getLoactions } from './actions';
import saga from './saga';

export function LocationSearch({ onSelection }) {
  useInjectReducer({ key: 'locationSearch', reducer });
  useInjectSaga({ key: 'locationSearch', saga });

  const isLoading = useSelector(makeSelectIsLoading());
  const foundLocations = useSelector(makeSelectLocations());
  const locationsSearchFailed = useSelector(makeSelectLocationSearchError());
  const dispatch = useDispatch();
  const getLocationsList = userInput => dispatch(getLoactions(userInput));
  const resetErrorMessage = useCallback(() => dispatch(resetError()), [
    dispatch,
  ]);

  useEffect(() => {
    if (locationsSearchFailed.length > 0) {
      toast.error(locationsSearchFailed, { autoClose: 3000 });
      resetErrorMessage();
    }
  }, [locationsSearchFailed]);

  const onSearch = event => {
    const { value: input } = event.target;
    if (input !== '') {
      getLocationsList(input);
    }
  };

  const onSelect = (e, input) => {
    if (input !== '') {
      const location = foundLocations.find(
        locationItem => input === locationItem.LocalizedName,
      );
      if (location)
        onSelection({ name: location.LocalizedName, key: location.Key });
    }
  };
  return (
    <Autocomplete
      className="searchField"
      id="free-solo-demo"
      freeSolo
      options={foundLocations.map(city => city.LocalizedName)}
      onChange={(e, option) => {
        onSelect(e, option);
      }}
      loading={isLoading}
      renderInput={params => (
        <DebounceInput
          {...params}
          debounceTimeout={500}
          element={TextField}
          onChange={onSearch}
          label="Location search"
          variant="filled"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}

export default LocationSearch;
