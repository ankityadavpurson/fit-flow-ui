import React, { lazy, Suspense, useEffect, useState } from "react";

import pathToScreenMap from "./constant/router";
import Loader from "./components/loader/loader";
import NotFound from "./pages/not-found/not-found";

const Login = lazy(() => import("./pages/login/login"));
const Home = lazy(() => import("./pages/home/home"));
const Members = lazy(() => import("./pages/members/members"));
const Subscriptions = lazy(() => import("./pages/subscriptions/subscriptions"));

const App = () => {
  const [screen, setScreen] = useState("");

  useEffect(() => {
    setScreen(pathToScreenMap[window.location.pathname] || "not-found");
  }, []);

  const authScreens = () => {
    switch (screen) {
      case "not-found":
        return <NotFound />;
      case "login":
        return <Login />;
      case "home":
        return <Home />;
      case "members":
        return <Members />;
      case "subscriptions":
        return <Subscriptions />;
      default:
        return null;
    }
  };

  return <Suspense fallback={<Loader />}>{authScreens()}</Suspense>;
};

export default App;
