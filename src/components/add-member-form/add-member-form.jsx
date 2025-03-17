import { useEffect, useState } from "react";
import "./add-member-form.css";
import { fetchSubscriptions, saveUser, updateUser } from "../../helper/apis";
import Success from "../icons/success";
import LoadingAction from "../loader/loading-action";
const defaultUsers = {
  name: "",
  phoneNo: "",
  emailId: "",
  subscriptionId: "",
  joiningDate: "",
  amount: "",
};

const zeroSubscriptions0 = {
  subscriptionId: 0,
  subscriptionDiscount: 0,
  subscriptionPrice: 0,
  subscriptionPlan: "Select Subscription Plan",
  subscriptionOffer: "",
  subscriptionDetails: "",
};

const AddMemberForm = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState(user || defaultUsers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [typesOfSubscriptions, setTypesOfSubscriptions] = useState([]);

  useEffect(() => {
    const getSubscriptions = async () => {
      const subscriptions = await fetchSubscriptions();
      setTypesOfSubscriptions([zeroSubscriptions0, ...subscriptions]);
    };
    getSubscriptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "subscriptionId") {
      const subscription = typesOfSubscriptions.find(
        (sub) => sub.subscriptionId === parseInt(e.target.value)
      );

      const amount =
        subscription.subscriptionPrice -
        subscription.subscriptionPrice *
          (subscription.subscriptionDiscount / 100);
      const _formData = { ...formData, amount, [name]: value };
      setFormData(_formData);
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (user) {
      const updatedSub = await updateUser(formData.phoneNo, formData);
      if (!updatedSub) {
        setError("Error updating subscription");
        setLoading(false);
        return;
      }
      setSuccess(true);
      setLoading(false);
      setFormData(defaultUsers);
      onSubmit();
      return;
    }

    const savedSub = await saveUser(formData);
    if (!savedSub) {
      setError("Error adding subscription");
      setLoading(false);
      return;
    }
    setSuccess(true);
    setLoading(false);
    setFormData(defaultUsers);
    onSubmit();
  };

  return (
    <div>
      {loading && (
        <LoadingAction
          text={user ? "Updating Member..." : "Adding Member..."}
        />
      )}

      {success && (
        <div className="add-user-form success-message">
          <Success size={100} />
          <h3>
            {user ? "Member Updated Successfully" : "Member Added Successfully"}
          </h3>
        </div>
      )}

      {!success && (
        <form className="add-user-form" onSubmit={handleFormSubmit}>
          <h3>{user ? "Update Member Details" : "Add New Member"}</h3>

          <div className="input-group">
            <label htmlFor="phoneNo">Phone No</label>
            <input
              required
              type="text"
              name="phoneNo"
              placeholder="Phone No"
              value={formData.phoneNo}
              onChange={handleChange}
              disabled={user}
            />

            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="emailId">Email ID</label>
            <input
              required
              type="email"
              name="emailId"
              placeholder="Email ID"
              value={formData.emailId}
              onChange={handleChange}
            />

            <label htmlFor="joiningDate">Joining Date</label>
            <input
              required
              type="date"
              name="joiningDate"
              placeholder="Joining Date"
              value={formData.joiningDate.split("T")[0]}
              onChange={handleChange}
            />

            <label htmlFor="subscriptionId">Subscription Plan</label>
            <select
              required
              name="subscriptionId"
              value={formData.subscriptionId}
              onChange={handleChange}
            >
              {typesOfSubscriptions.map((sub) => (
                <option key={sub.subscriptionId} value={sub.subscriptionId}>
                  {`${sub.subscriptionPlan}${
                    sub.subscriptionDiscount !== 0
                      ? ` - ₹${sub.subscriptionDiscount} % discount`
                      : ""
                  }`}
                </option>
              ))}
            </select>
          </div>

          {formData.amount > 0 ? (
            <table className="amount-details">
              <tbody>
                <tr>
                  <td>Amount</td>
                  <td>
                    ₹
                    {
                      typesOfSubscriptions.find(
                        (sub) =>
                          sub.subscriptionId ===
                          parseInt(formData.subscriptionId)
                      )?.subscriptionPrice
                    }
                  </td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td>
                    {
                      typesOfSubscriptions.find(
                        (sub) =>
                          sub.subscriptionId ===
                          parseInt(formData.subscriptionId)
                      )?.subscriptionDiscount
                    }
                    %
                  </td>
                </tr>
                <tr>
                  <td>After discount</td>
                  <td>₹{formData.amount}</td>
                </tr>
                <tr>
                  <td>GST 18%</td>
                  <td>₹{(formData.amount * 0.18).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Total Amount</td>
                  <td>
                    ₹{(formData.amount + formData.amount * 0.18).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p className="no-amount">
              Please select a Subscription Plan to view the final amount
              details.
            </p>
          )}

          {error && <div className="error-message">{error}</div>}
          <button type="submit">{user ? "Update Member" : "Add Member"}</button>
        </form>
      )}
    </div>
  );
};

export default AddMemberForm;
