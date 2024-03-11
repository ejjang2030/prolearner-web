import Urls from "../config/routes";
import React, { lazy, FC } from "react";
import { useRoutes, RouteObject, Navigate, Routes } from 'react-router-dom';
import { NotFoundPage, LoginPage, HomePage } from '../pages/index';

const routeList: RouteObject[] = [
  {
    path: Urls.LOGIN,
    element: <LoginPage />,
  },
  {
    path: Urls.NOT_FOUND,
    element: <NotFoundPage />
  },
  {
    path: Urls.HOME,
    element: <HomePage />
  }
];

const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;