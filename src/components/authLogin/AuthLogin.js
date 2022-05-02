import React, { useCallback, useRef, useState, useEffect } from "react";
import GitHubLogin from "react-github-login";
import "./AuthLogin.css";
import Home from "../../Home";
import { LoginSocialGithub } from "reactjs-social-login";
import { Icon } from "@iconify/react";

const REDIRECT_URI = "http://localhost:3000/login/github/authorized";
export default function AuthLogin() {
  const onSuccess = (response) => {
      localStorage.setItem("code", response.code)
  };
  const onFailure = (response) => console.error(response);


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




{/* <p>Log in with</p>
    <button>
            <span>
              <Icon
                icon="icon-park:github"
                className="gitIcon"
                color="#ffffff"
                width="16"
                height="16"
                inline={true}
              />
              GitHub
            </span>
          </button> */}