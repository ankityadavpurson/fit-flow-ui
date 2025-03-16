import { useState } from "react";
import "./add-member-form.css";
const defaultUsers = {
  name: "",
  phoneNo: "",
  emailId: "",
  subscriptionId: "",
  joiningDate: "",
  amount: "",
};

const typesOfSubscriptions = [
  {
    subscriptionId: 0,
    subscriptionDiscount: 0,
    price: 0,
    subscriptionPlan: "Select Subscription Plan",
    subscriptionOffer: "",
    subscriptionDetails: "",
  },
  {
    subscriptionId: 100,
    subscriptionDiscount: 5,
    price: 1999,
    subscriptionPlan: "1-Month Plan for just ₹1,999!",
    subscriptionOffer: "Get a 5% discount on your Subscription Plan!",
    subscriptionDetails: "Enjoy a 21-day pause on your subscription",
  },
  {
    subscriptionId: 200,
    subscriptionDiscount: 0,
    price: 2999,
    subscriptionPlan: "2-Month Plan for just ₹2,999!",
    subscriptionOffer: "No discount on your Subscription Plan!",
    subscriptionDetails: "Enjoy a 21-day pause on your subscription",
  },
  {
    subscriptionId: 300,
    subscriptionDiscount: 10,
    price: 4999,
    subscriptionPlan: "3-Month Plan for just ₹4,999!",
    subscriptionOffer: "Get a 10% discount on your Subscription Plan!",
    subscriptionDetails: "Enjoy a 21-day pause on your subscription",
  },
  {
    subscriptionId: 400,
    subscriptionDiscount: 15,
    price: 7999,
    subscriptionPlan: "6-Month Plan for just ₹7,999!",
    subscriptionOffer: "Get a 15% discount on your Subscription Plan!",
    subscriptionDetails: "Enjoy a 21-day pause on your subscription",
  },
];

const AddMemberForm = ({ user }) => {
  const [formData, setFormData] = useState(user || defaultUsers);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "subscriptionId") {
      const subscription = typesOfSubscriptions.find(
        (sub) => sub.subscriptionId === parseInt(e.target.value)
      );

      const amount =
        subscription.price -
        subscription.price * (subscription.subscriptionDiscount / 100);
      const _formData = { ...formData, amount, [name]: value };
      setFormData(_formData);
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <form className="add-user-form" onSubmit={handleFormSubmit}>
        <h3>{user ? "Update Member Details" : "Add New Member"}</h3>
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="phoneNo"
          placeholder="Phone No"
          value={formData.phoneNo}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="emailId"
          placeholder="Email ID"
          value={formData.emailId}
          onChange={handleChange}
        />
        <input
          required
          type="date"
          name="joiningDate"
          placeholder="Joining Date"
          value={formData.joiningDate.split("T")[0]}
          onChange={handleChange}
        />
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

        {formData.amount > 0 ? (
          <table className="amount-details">
            <tbody>
              <tr>
                <td>Amount</td>
                <td>₹{formData.amount}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>
                  {
                    typesOfSubscriptions.find(
                      (sub) =>
                        sub.subscriptionId === parseInt(formData.subscriptionId)
                    ).subscriptionDiscount
                  }
                  %
                </td>
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
            Please select a Subscription Plan to view the final amount details.
          </p>
        )}

        <button type="submit">{user ? "Update Member" : "Add Member"}</button>
      </form>
    </div>
  );
};

export default AddMemberForm;
