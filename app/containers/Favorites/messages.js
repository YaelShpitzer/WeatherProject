import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Favorites';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Favorites container!',
  },
});

export const messages = {
  errorApi: 'No access to AccuWeather API',
};
