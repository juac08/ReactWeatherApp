import React, { Suspense, useEffect } from "react";
import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import Header from "../components/Header";
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Details = React.lazy(() => import("../pages/Details"));

export const Layout = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop pathname={location.pathname} />
      <Header />
      <Outlet key={location.key} />
    </Suspense>
  );
};

const ScrollToTop = ({ pathname }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
        index: true,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/dashboard/:city",
        element: <Details />,
      },
    ],
  },
]);
