import { useEffect } from "react";
import Header from "../header/header";
import { authCheckOnPrivatePage } from "../../helper/auth";
import { setPageTitle } from "../../helper/utils";

const Layout = (props) => {
  useEffect(() => {
    setPageTitle(props.title);
    authCheckOnPrivatePage();
  }, [props.title]);

  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
