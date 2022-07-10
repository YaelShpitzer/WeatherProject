import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './LocationForecast.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    padding: '5px',
    color: 'white',
    height: 140,
    backgroundColor: 'rgb(152,238,255)',
    backgroundSize: '50%',
  },
  forecastDay: {
    margin: '5px',
    minWidth: '150px',
    filter: 'drop-shadow(0px 0px 10px #3335)',
  },
});

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednsday',
  'Thursday',
  'Friday',
  'Saturday',
];

function LocationForecast({ locationForecast }) {
  const classes = useStyles();

  const forecastData = locationForecast ? locationForecast.DailyForecasts : [];

  const findDay = date => {
    date = new Date(date);
    return days[date.getDay()];
  };

  const findWeatherIcon = iconKey =>
    require(`../../textures/weather_icons/${iconKey}.png`);

  return (
    <Grid container className="forecastContainer">
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Daily Forecast
        </Typography>
        <Typography variant="h5" gutterBottom>
          {locationForecast.Headline.Text}
        </Typography>
      </Grid>
      {forecastData.map(day => (
        <Grid
          item
          xs={12}
          sm={2}
          key={day.Date}
          className={classes.forecastDay}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={findWeatherIcon(day.Day.Icon)}
                title={day.Day.IconPhrase}
              >
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  {day.Day.IconPhrase}
                </Typography>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {findDay(day.Date)}
                </Typography>
                <Typography variant="h5" color="textPrimary" display="inline">
                  {`${day.Temperature.Maximum.Value}° `}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  display="inline"
                >
                  {`${day.Temperature.Minimum.Value}°`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default LocationForecast;
