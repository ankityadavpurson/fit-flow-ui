export const setPageTitle = (title) => {
  document.title = title || "Fil Flow";
};

export const redirect = (path) => {
  window.location.href = path;
};
