import superagent from 'superagent';

const BASE_URL = 'http://127.0.0.1:8000/';


//########################## Login ######################################
export const login = (email, password) => {
  return superagent.post(`${BASE_URL}users/login/`, { email, password });
};


//######################### Register #####################################
export const register = (email, password) => {
  return superagent.post(`${BASE_URL}users/register/`, { email, password });
};