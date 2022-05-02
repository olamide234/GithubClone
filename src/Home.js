import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { MainApp, NavBar, SideBar } from "./containers";

export default function Home() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();

  useEffect(() => {
    setCode(localStorage.getItem("code"));
  }, []);

  // useEffect(() => {
  //   setToken(localStorage.getItem("userToken"));

  // }, []);

  const viewRepo = () => {
    let cors = "https://cors-anywhere.herokuapp.com/";
    let githubToken = "https://github.com/login/oauth/access_token/";
    axios
      .post(`${cors}${githubToken}`, {
        client_id: process.env.REACT_APP_GITHUB_APP_ID,
        client_secret: process.env.REACT_APP_GITHUB_APP_SECRET,
        code: code,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        state: process.env.REACT_APP_STATE,
      })
      .then(function (response) {
        setLoading(false);
        localStorage.setItem("userToken", response);
        setToken(response.data);
        console.log(response);
      })
      .then(function (response) {
        console.log(token);
        axios
          .get("https://api.github.com/user", null, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      {loading ? (
        <div className="App__viewRepo">
          <h1>Congratulations!!!</h1>
          <p>You are logged in</p>
          <button className="App__viewRepo-btn" onClick={viewRepo}>
            View all your public repository
          </button>
        </div>
      ) : (
        <>
          <div className="App__navbar">
            <NavBar />
          </div>
          <div className="App__mainSession section__padding section__margin">
            <div className="App__mainSession-content blueprint">
              <SideBar />
              <MainApp />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
