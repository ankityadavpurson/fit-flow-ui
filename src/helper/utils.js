export const setPageTitle = (title) => {
  document.title = title || "Fit Flow";
};

export const redirect = (path) => {
  window.location.href = path;
};

export const maskPhoneNo = (phoneNo) => phoneNo.replace(/.(?=.{4})/g, "*");

export const maskEmailId = (emailId) =>
  emailId.replace(/(.{2})(.*)(?=@)/, (_, a, b) => a + b.replace(/./g, "*"));
