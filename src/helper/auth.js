import { redirect } from "../constant/router";

export const authCheckOnLoginPage = () => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  if (userLoggedIn) {
    redirect("/");
  }
};

export const authCheckOnPrivatePage = () => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  if (!userLoggedIn) {
    redirect("/login");
  }
};
