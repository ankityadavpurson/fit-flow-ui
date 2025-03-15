import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import View from "../../components/icons/view";
import Edit from "../../components/icons/edit";
import Delete from "../../components/icons/delete";
import AddSubscriptionForm from "../../components/add-subscription-form/add-subscription-form";
import "./subscriptions.css";

const Subscriptions = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);

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
      <Layout title="Subscriptions">
        <h2>Manage Subscriptions</h2>
        <button onClick={handleDialogOpen} className="add-member">
          Add Subscription
        </button>
        {subscriptions.length !== 0 && (
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
        )}
        {subscriptions.length === 0 && (
          <div className="no-data">
            <p>No subscriptions found. Add a subscription to get started.</p>
          </div>
        )}
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
