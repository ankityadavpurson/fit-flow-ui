import React, { useState } from "react";
import "./add-subscription-form.css";
import { saveSubscription } from "../../helper/apis";
import LoadingAction from "../loader/loading-action";
import Success from "../icons/success";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChanges = (e) => {
    setNewSub({ ...newSub, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    const savedSub = await saveSubscription(newSub);
    if (savedSub.error) {
      setError("Error adding subscription");
      setLoading(false);
      return;
    }
    setSuccess(true);
    setLoading(false);
    setNewSub(defaultSub);
    console.log(newSub);
  };

  return (
    <div>
      {loading && <LoadingAction text="Adding ..." />}
      {success && (
        <div className="subscription-form success-message">
          <Success size={100} />
          <h3>Subscription Added Successfully!</h3>
        </div>
      )}
      {!success && (
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
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Add Subscription</button>
        </form>
      )}
    </div>
  );
};

export default AddSubscriptionForm;
