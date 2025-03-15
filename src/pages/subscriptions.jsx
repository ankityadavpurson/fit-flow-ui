import React, { useState } from "react";
import "./subscriptions.css";
import Layout from "../components/layout";
import View from "../components/icons/view";
import Edit from "../components/icons/edit";
import Delete from "../components/icons/delete";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([
    {
      subscriptionId: 0,
      subscriptionPlan: "Basic Plan",
      subscriptionOffer: "10% Off",
      subscriptionDetails: "Access to gym equipment only",
    },
  ]);
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
      setSubscriptions([
        ...subscriptions,
        { subscriptionId: Date.now(), ...newSub },
      ]);
      setNewSub({
        subscriptionPlan: "",
        subscriptionOffer: "",
        subscriptionDetails: "",
      });
    }
  };

  const handleDelete = (id) => {
    setSubscriptions(subscriptions.filter((sub) => sub.subscriptionId !== id));
  };

  return (
    <div className="subscriptions-container">
      <Layout>
        <h2>Manage Subscriptions</h2>
        <div className="subscription-form">
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
              setNewSub({ ...newSub, subscriptionOffer: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Subscription Details"
            value={newSub.subscriptionDetails}
            onChange={(e) =>
              setNewSub({ ...newSub, subscriptionDetails: e.target.value })
            }
          />
          <button onClick={handleAdd}>Add Subscription</button>
        </div>
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
    </div>
  );
};

export default Subscriptions;
