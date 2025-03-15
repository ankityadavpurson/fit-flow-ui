import { useEffect } from "react";
import Header from "./header";
import { authCheckOnPrivatePage } from "../helper/auth";

const Layout = (props) => {
  useEffect(() => {
    authCheckOnPrivatePage();
  }, []);

  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
