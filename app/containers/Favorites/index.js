import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useInjectReducer } from 'utils/injectReducer';
import request from 'utils/request';
import { currentConditionsUrl } from 'utils/api';
import { makeSelectFavorites } from './selectors';
import { makeSelectIsMetric } from '../TempType/selectors';
import { setSelectedLocation } from '../Forcast/actions';
import reducer from './reducer';
import messages from './messages';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '10px',
    width: '90%',
    margin: 'auto',
  },
  forecastDay: {
    filter: 'drop-shadow(0px 0px 10px #3335)',
  },
  favoritesContainer: {
    background: 'red',
  },
});

function FavoriteItem({ item, isMetric, setSelectedCity }) {
  const [conditions, setConditions] = useState(null);

  useEffect(() => {
    request(currentConditionsUrl(item.key))
      .then(data => {
        setConditions(data[0]);
      })
      .catch(err => {
        toast.error(messages.errorApi, { autoClose: 3000 });
      });
  }, [item.key]);

  const findWeatherIcon = iconKey =>
    require(`../../textures/weather_icons/${iconKey}.png`);

  return (
    <Card>
      <CardActionArea onClick={() => setSelectedCity(item)}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {item.name}
          </Typography>
          {conditions ? (
            <div>
              <img
                src={findWeatherIcon(conditions.WeatherIcon)}
                alt="current icon"
                style={{ verticalAlign: 'middle' }}
                className="weatherIcon"
              />
              <br />
              <Typography variant="h4" display="inline">
                {isMetric
                  ? conditions.Temperature.Metric.Value
                  : conditions.Temperature.Imperial.Value}
              </Typography>
              <Typography variant="h4" display="inline">
                {isMetric ? ' C°' : ' F°'}
              </Typography>
            </div>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Favorites({ setRoute }) {
  useInjectReducer({ key: 'favorites', reducer });

  const favorites = useSelector(makeSelectFavorites());
  const isMetric = useSelector(makeSelectIsMetric());
  const dispatch = useDispatch();
  const classes = useStyles();

  const setSelectedCity = location => {
    setRoute('/');
    dispatch(setSelectedLocation(location));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      {favorites.map(item => (
        <Grid item sm={2} className={classes.forecastDay} key={item.key}>
          <FavoriteItem
            item={item}
            isMetric={isMetric}
            setSelectedCity={setSelectedCity}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Favorites;
