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

//################# Send Email with Update Password Link ##################
export const forgotPasswordMail = (email) => {
  return superagent.post(`${BASE_URL}users/reset-password-mail/`, { email });
};

//######################### Update Password ###############################
export const forgotPassword = (uid, token, password) => {
  return superagent.post(`${BASE_URL}users/password-reset-confirm/${uid}/${token}/`, { password });
};

// ################################ Logout ################################
export const logout = () => {
  console.log('Logout in authService was called!');
  return superagent.post(`${BASE_URL}/users/logout/`);
};