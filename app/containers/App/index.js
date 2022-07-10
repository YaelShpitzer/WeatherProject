import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@material-ui/core/Container';
import NavBar from '../../components/NavBar/NavBar';
import Forcast from '../Forcast/index';
import Favorites from '../Favorites/index';
import './index.scss';

toast.configure({
  position: toast.POSITION.BOTTOM_LEFT,
});

export function App() {
  const [route, setRoute] = useState('/');

  const useStyles = makeStyles(theme => ({
    root: {
      background: '#EEE',
      minHeight: '100vh',
      height: 'auto',
      padding: 0,
    },
  }));
  const classes = useStyles();

  return (
    <Container fixed className={classes.root} maxWidth="xl">
      <NavBar setRoute={setRoute} route={route} />
      {route === '/' ? <Forcast /> : <Favorites setRoute={setRoute} />}
    </Container>
  );
}

export default App;
