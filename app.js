import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js";
import Body from "./components/body.js";
import Footer from "./components/footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about.js";
import Error from "./components/error.js";
import RestaurantMenu  from "./components/res.js";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router={appRouter}/>);