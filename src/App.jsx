import React, { Suspense, lazy, useEffect, useState } from "react";

import pathToScreenMap from "./constant/router";
import Loader from "./components/loader";

const Login = lazy(() => import("./pages/login"));
const Home = lazy(() => import("./pages/home"));
const Users = lazy(() => import("./pages/users"));
const Subscriptions = lazy(() => import("./pages/subscriptions"));

const App = () => {
  const [screen, setScreen] = useState("");

  useEffect(() => {
    setScreen(pathToScreenMap[window.location.pathname] || "not-found");
  }, []);

  const authScreens = () => {
    switch (screen) {
      case "not-found":
        return <div>404 Not Found</div>;
      case "login":
        return <Login />;
      case "home":
        return <Home />;
      case "users":
        return <Users />;
      case "subscriptions":
        return <Subscriptions />;
      default:
        return null;
    }
  };

  return <Suspense fallback={<Loader />}>{authScreens()}</Suspense>;
};

export default App;
