import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const checkToken = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const AuthenticationCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyTokenAndRedirect = async () => {
      const isValid = await checkToken();
      if (isValid) {
        navigate("/main");
      } else {
        navigate("/");
      }
    };

    verifyTokenAndRedirect();
  }, [navigate]); 

  return null;
};

export default AuthenticationCheck;
