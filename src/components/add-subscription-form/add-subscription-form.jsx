import React, { useState } from "react";
import "./add-subscription-form.css";
import { saveSubscription, updateSubscription } from "../../helper/apis";
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

const AddSubscriptionForm = ({ subscription, onSubmit }) => {
  const [newSub, setNewSub] = useState(subscription || defaultSub);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChanges = (e) => {
    setNewSub({ ...newSub, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (subscription) {
      const updatedSub = await updateSubscription(newSub);
      console.log("🚀 ~ handleAdd ~ updatedSub:", updatedSub);
      if (!updatedSub) {
        setError("Error updating subscription");
        setLoading(false);
        return;
      }
      setSuccess(true);
      setLoading(false);
      setNewSub(defaultSub);
      onSubmit();
      return;
    }

    const savedSub = await saveSubscription(newSub);
    if (!savedSub) {
      setError("Error adding subscription");
      setLoading(false);
      return;
    }
    setSuccess(true);
    setLoading(false);
    setNewSub(defaultSub);
    onSubmit();
  };

  return (
    <div>
      {loading && (
        <LoadingAction
          text={
            subscription ? "Updating Subscription..." : "Adding Subscription..."
          }
        />
      )}
      {success && (
        <div className="subscription-form success-message">
          <Success size={100} />
          <h3>
            {subscription
              ? "Subscription Updated Successfully"
              : "Subscription Added Successfully"}
          </h3>
        </div>
      )}
      {!success && (
        <form onSubmit={handleAdd} className="subscription-form">
          <h3>
            {subscription
              ? "Update Subscription Details"
              : "Add New Subscription"}
          </h3>
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
              disabled={subscription}
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
          <button type="submit">
            {subscription ? "Update Subscription" : "Add Subscription"}
          </button>
        </form>
      )}
    </div>
  );
};

export default AddSubscriptionForm;
