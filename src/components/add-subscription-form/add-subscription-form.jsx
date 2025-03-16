import React, { useState } from "react";
import "./add-subscription-form.css";

const defaultSub = {
  subscriptionId: "",
  subscriptionPlan: "",
  subscriptionPrice: "",
  subscriptionDiscount: "",
  subscriptionOffer: "",
  subscriptionDetails: "",
};

const AddSubscriptionForm = () => {
  const [newSub, setNewSub] = useState(defaultSub);

  const handleChanges = (e) => {
    setNewSub({ ...newSub, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // Add your code here to add the subscription
    console.log(newSub);
  };

  return (
    <div>
      <form onSubmit={handleAdd} className="subscription-form">
        <h3>Add New Subscription</h3>

        <div className="input-group">
          <label htmlFor="subscriptionId">ID</label>
          <input
            required
            type="number"
            id="subscriptionId"
            name="subscriptionId"
            placeholder="Subscription ID"
            value={newSub.subscriptionId}
            onChange={handleChanges}
          />

          <div className="price-discount">
            <div>
              <label htmlFor="subscriptionPrice">Price</label>
              <input
                required
                type="number"
                id="subscriptionPrice"
                name="subscriptionPrice"
                placeholder="Subscription Price"
                value={newSub.subscriptionPrice}
                onChange={handleChanges}
              />
            </div>
            <div>
              <label htmlFor="subscriptionDiscount">Discount</label>
              <input
                required
                type="number"
                id="subscriptionDiscount"
                name="subscriptionDiscount"
                placeholder="Subscription Discount"
                value={newSub.subscriptionDiscount}
                onChange={handleChanges}
              />
            </div>
          </div>

          <label htmlFor="subscriptionPlan">Plan</label>
          <input
            required
            type="text"
            id="subscriptionPlan"
            name="subscriptionPlan"
            placeholder="Subscription Plan"
            value={newSub.subscriptionPlan}
            onChange={handleChanges}
          />

          <label htmlFor="subscriptionOffer">Offer</label>
          <input
            required
            type="text"
            id="subscriptionOffer"
            name="subscriptionOffer"
            placeholder="Subscription Offer"
            value={newSub.subscriptionOffer}
            onChange={handleChanges}
          />

          <label htmlFor="subscriptionDetails">Details</label>
          <input
            required
            type="text"
            id="subscriptionDetails"
            name="subscriptionDetails"
            placeholder="Subscription Details"
            value={newSub.subscriptionDetails}
            onChange={handleChanges}
          />
        </div>
        <button type="submit">Add Subscription</button>
      </form>
    </div>
  );
};

export default AddSubscriptionForm;
