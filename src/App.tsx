import React, { Suspense, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './styles/index.css';
import RenderRouter from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RenderRouter />
    </BrowserRouter>
  );
};


export default App
