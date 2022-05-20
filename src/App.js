import React from "react";
import Registration from "./Component/signUp";
import Login from "./Component/login";
import ButtonAppBar from "./Component/appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
