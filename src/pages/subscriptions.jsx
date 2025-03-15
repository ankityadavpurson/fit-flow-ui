import React, { useState } from "react";
import "./subscriptions.css";
import Layout from "../components/layout";
import View from "../components/icons/view";
import Edit from "../components/icons/edit";
import Delete from "../components/icons/delete";
import AddSubscriptionForm from "../components/add-subscription-form";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([
    {
      subscriptionId: 0,
      subscriptionPlan: "Basic Plan",
      subscriptionOffer: "10% Off",
      subscriptionDetails: "Access to gym equipment only",
    },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDelete = (id) => {
    setSubscriptions(subscriptions.filter((sub) => sub.subscriptionId !== id));
  };

  return (
    <div className="subscriptions-container">
      <Layout>
        <h2>Manage Subscriptions</h2>
        <button onClick={handleDialogOpen} className="add-member">Add Subscription</button>
        <table>
          <thead>
            <tr>
              <th>Subscription ID</th>
              <th>Plan</th>
              <th>Offer</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub) => (
              <tr key={sub.subscriptionId}>
                <td>{sub.subscriptionId}</td>
                <td>{sub.subscriptionPlan}</td>
                <td>{sub.subscriptionOffer}</td>
                <td>{sub.subscriptionDetails}</td>
                <td className="action">
                  <button>
                    <View />
                  </button>
                  <button>
                    <Edit />
                  </button>
                  <button onClick={() => handleDelete(sub.subscriptionId)}>
                    <Delete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>

      {isDialogOpen && (
        <div className="dialog-container">
          <dialog open className="dialog">
            <div className="dialog-content">
              <button className="close-dialog" onClick={handleDialogClose}>
                X
              </button>
              <AddSubscriptionForm />
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default Subscriptions;
