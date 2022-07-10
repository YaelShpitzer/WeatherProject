import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectIsLoading,
  makeSelectLocation,
  makeSelectConditions,
  makeSelectForecast,
} from './selectors';
import { makeSelectIsMetric } from '../TempType/selectors';
import reducer from './reducer';
import {
  setSelectedLocation,
  getLocationConditions,
  getForecast,
} from './actions';
import saga from './saga';
import LocationSearch from '../LocationSearch/index';
import CurrentLocationConditions from '../../components/CurrentLocationConditions/CurrentLocationConditions';
import LocationForecast from '../../components/LocationForecast/LocationForecast';

export function Forcast() {
  useInjectReducer({ key: 'forcast', reducer });
  useInjectSaga({ key: 'forcast', saga });

  const isMetric = useSelector(makeSelectIsMetric());
  const isLoading = useSelector(makeSelectIsLoading());
  const selectedLocation = useSelector(makeSelectLocation());
  const currentConditions = useSelector(makeSelectConditions());
  const locationForecast = useSelector(makeSelectForecast());
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedLocation) {
      dispatch(getLocationConditions(selectedLocation.key));
      dispatch(getForecast(selectedLocation.key, isMetric));
    }
  }, [selectedLocation]);

  const setSelectedCity = location => {
    dispatch(setSelectedLocation(location));
  };

  const useStyles = makeStyles(theme => ({
    root: {
      padding: '10px',
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <LocationSearch onSelection={setSelectedCity} />
        </Grid>
        {!isLoading && selectedLocation ? (
          <Grid item xs={12}>
            <Card>
              <CurrentLocationConditions
                selectedLocation={selectedLocation}
                currentConditions={currentConditions}
                isMetric={isMetric}
              />
              {locationForecast && (
                <LocationForecast locationForecast={locationForecast} />
              )}
            </Card>
          </Grid>
        ) : (
          ''
        )}
      </Grid>
    </div>
  );
}

export default Forcast;
