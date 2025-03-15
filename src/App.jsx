import React, { Suspense, lazy, useEffect, useState } from "react";

import pathToScreenMap from "./constant/router";
import Users from "./pages/users";

const Login = lazy(() => import("./pages/login"));
const Home = lazy(() => import("./pages/home"));

const App = () => {
  const [screen, setScreen] = useState("");

  useEffect(() => {
    setScreen(pathToScreenMap[window.location.pathname] || "not-found");
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case "not-found":
        return <div>404 Not Found</div>;
      case "login":
        return <Login />;
      case "home":
        return <Home />;
      case "users":
        return <Users />;
      // case "payments":
      //   return <Payments />;
      // case "subscriptions":
      //   return <Subscriptions />;
      // case "logout":
      //   return <Logout />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>{renderScreen()}</Suspense>
    </div>
  );
};

export default App;
