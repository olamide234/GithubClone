import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { AuthLogin } from "./components";
import Home from "./Home";

function App() {
  const[code, setCode] = useState('')
  let navigate = useNavigate();

  useEffect(() => {
    setCode(localStorage.getItem("code"));
    if (code) {
      return navigate("/");
    } else {
      return navigate("/login")
    }
  }, [code]);
  

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthLogin />} />
      </Routes>
  );
}

export default App;
