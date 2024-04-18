import superagent from 'superagent';

const BASE_URL = 'http://deine-django-api-url/api';

export const fetchData = () => {
  return superagent.get(`${BASE_URL}/data`);
};