import React from "react";
import GitHubLogin from "react-github-login";
import {useNavigate} from "react-router-dom";
import "./AuthLogin.css";

const REDIRECT_URI = "http://localhost:3000/login/github/authorized";
export default function AuthLogin() {
  let navigate = useNavigate();

  const onSuccess = (response) => {
      localStorage.setItem("code", response.code)
      navigate("/")
  };

  const onFailure = (response) => {
    navigate("/login")
    console.error(response)
  }


  return (
      <div className="gh__authLogin">
        <GitHubLogin
          clientId={process.env.REACT_APP_GITHUB_APP_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Login with GitHub"
          redirectUri={REDIRECT_URI}
        />
      </div>
  );
}
