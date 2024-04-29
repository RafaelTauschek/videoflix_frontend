import superagent from "superagent";

const BASE_URL = "http://127.0.0.1:8000/";

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
  return superagent.post(
    `${BASE_URL}users/password-reset-confirm/${uid}/${token}/`,
    { password }
  );
};

//######################### Update Password ###############################
export const changePassword = (
  current_password,
  new_password,
  confirm_password
) => {
  const token = localStorage.getItem("token");
  return superagent
    .post(`${BASE_URL}users/reset-password/`, {
      current_password,
      new_password,
      confirm_password,
    })
    .set("Authorization", `Token ${token}`);
};

//######################### Get Profile ###############################
export const getProfile = () => {
  const token = localStorage.getItem("token");
  return superagent
    .get(`${BASE_URL}users/get-user-data/`)
    .set("Authorization", `Token ${token}`);
};

//######################### Update Profile ###############################
export const updateProfile = (email, first_name, last_name) => {
  const token = localStorage.getItem("token");
  return superagent
    .patch(`${BASE_URL}users/edit-user/`, { email, first_name, last_name })
    .set("Authorization", `Token ${token}`);
};

//######################### Update Profile-IMG ###############################
export const updateIMG = (profile_img) => {
  const token = localStorage.getItem("token");
  return superagent
    .patch(`${BASE_URL}users/edit-user/`, { profile_img })
    .set("Authorization", `Token ${token}`);
};

// ################################ Logout ################################
export const logout = () => {
  const token = localStorage.getItem("token");
  return superagent
    .post(`${BASE_URL}users/logout/`)
    .set("Authorization", `Token ${token}`);
};
