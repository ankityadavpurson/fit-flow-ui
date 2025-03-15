export const redirect = (path) => {
  window.location.pathname = path;
};

const pathToScreenMap = {
  "/login": "login",
  "/members": "members",
  "/payments": "payments",
  "/subscriptions": "subscriptions",
  "/": "home",
};

export default pathToScreenMap;
