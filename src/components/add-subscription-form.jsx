import React, { useState } from "react";
import "./add-subscription-form.css";

const AddSubscriptionForm = () => {
  const [newSub, setNewSub] = useState({
    subscriptionPlan: "",
    subscriptionOffer: "",
    subscriptionDetails: "",
  });

  const handleAdd = () => {
    if (
      newSub.subscriptionPlan &&
      newSub.subscriptionOffer &&
      newSub.subscriptionDetails
    ) {
      console.log(newSub);
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd} className="subscription-form">
        <h3>Add Subscription</h3>
        <input
          type="text"
          placeholder="Subscription Plan"
          value={newSub.subscriptionPlan}
          onChange={(e) =>
            setNewSub({ ...newSub, subscriptionPlan: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Subscription Offer"
          value={newSub.subscriptionOffer}
          onChange={(e) =>
            setNewSub({
              ...newSub,
              subscriptionOffer: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Subscription Details"
          value={newSub.subscriptionDetails}
          onChange={(e) =>
            setNewSub({
              ...newSub,
              subscriptionDetails: e.target.value,
            })
          }
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddSubscriptionForm;
