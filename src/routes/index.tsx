import Routes from "../config/routes";
import React, { lazy, FC } from "react";
import { useRoutes, RouteObject } from 'react-router-dom';
import NotFoundPage from '../pages/404';

const routeList: RouteObject[] = [
  {
    path: Routes.LOGIN,
    element: <>Login</>,
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