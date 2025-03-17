const API_BASE_URL = "/api";

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/allUsers`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const saveUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/saveUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateUser = async (phoneNo, userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/updateUser/${phoneNo}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deleteUser = async (phoneNo) => {
  try {
    const response = await fetch(`${API_BASE_URL}/deleteUser/${phoneNo}`, {
      method: "DELETE",
    });
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const fetchSubscriptions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/getSubscriptions`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const saveSubscription = async (subscriptionData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/saveSubscription`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscriptionData),
    });
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateSubscription = async (subscriptionData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/updateSubscription`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscriptionData),
    });
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deleteSubscription = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/deleteSubscription/${id}`, {
      method: "DELETE",
    });
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const fetchUser = async (phoneNo) => {
  try {
    const response = await fetch(`${API_BASE_URL}/getUser/${phoneNo}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchSubscriptionById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/getSubscription/${id}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchUserSubscription = async (phoneNo) => {
  try {
    const response = await fetch(`${API_BASE_URL}/userSubDetails/${phoneNo}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchTotalAmount = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/totalAmount`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return "0";
  }
};

export const fetchAmountByMonth = async (month) => {
  try {
    const response = await fetch(`${API_BASE_URL}/amount/${month}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return "0";
  }
};
