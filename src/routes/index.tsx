import Routes from "../config/routes";
import React, { lazy, FC } from "react";
import { useRoutes, RouteObject } from 'react-router-dom';
import { NotFoundPage, LoginPage } from '../pages/index';

const routeList: RouteObject[] = [
  {
    path: Routes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: Routes.NOT_FOUND,
    element: <NotFoundPage />
  }
];

const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;