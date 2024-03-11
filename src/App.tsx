import React, { Suspense, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import '@/index.css';
import RenderRouter from "./routes";

const App: React.FC = () => {
  const isAuthorized = sessionStorage.getItem("isAuthorized");
  console.log('isAuthorized : ' + isAuthorized);
  return (
    <BrowserRouter>
      {!isAuthorized ? <Navigate to="/login" /> : <Navigate to="/" />} 
      <Routes>
        <RenderRouter />
      </Routes>
    </BrowserRouter>
  );
};

export default App
