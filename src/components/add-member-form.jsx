import "./add-member-form.css";
import { useState } from "react";

const AddMemberForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subscriptionId: "",
    joiningDate: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form className="add-user-form" onSubmit={(e) => e.preventDefault()}>
        <h3>Add User</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone No"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subscriptionId"
          placeholder="Subscription ID"
          value={formData.subscriptionId}
          onChange={handleChange}
        />
        <input
          type="date"
          name="joiningDate"
          placeholder="Joining Date"
          value={formData.joiningDate}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMemberForm;
