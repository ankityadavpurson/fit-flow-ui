import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import View from "../../components/icons/view";
import Edit from "../../components/icons/edit";
import Delete from "../../components/icons/delete";
import AddSubscriptionForm from "../../components/add-subscription-form/add-subscription-form";
import "./subscriptions.css";
import { deleteSubscription, fetchSubscriptions } from "../../helper/apis";
import Close from "../../components/icons/close";
import ViewSubscription from "./view-subscription";

const Subscriptions = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [view, setView] = useState(false);
  const [deleteSub, setDeleteSub] = useState(null);

  const getSubscriptions = async () => {
    const _subscriptions = await fetchSubscriptions();
    setSubscriptions(_subscriptions);
  };

  useEffect(() => {
    getSubscriptions();
  }, []);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSubscription(null);
    setDeleteSub(null);
  };

  const handleDeleteDialog = (sub) => {
    setDeleteSub(sub);
    setIsDialogOpen(true);
  };

  const handleDelete = async (sub) => {
    const deleted = await deleteSubscription(sub.subscriptionId);
    if (deleted) getSubscriptions();
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
                <th>Price</th>
                <th>Discount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub) => (
                <tr key={sub.subscriptionId}>
                  <td>{sub.subscriptionId}</td>
                  <td>{sub.subscriptionPlan}</td>
                  <td>{sub.subscriptionPrice}</td>
                  <td>{sub.subscriptionDiscount}</td>
                  <td>
                    <div className="action">
                      <button
                        onClick={() => {
                          setView(true);
                          setSubscription(sub);
                          setIsDialogOpen(true);
                        }}
                      >
                        <View />
                      </button>
                      <button
                        onClick={() => {
                          setView(false);
                          setSubscription(sub);
                          setIsDialogOpen(true);
                        }}
                      >
                        <Edit />
                      </button>
                      <button onClick={() => handleDeleteDialog(sub)}>
                        <Delete />
                      </button>
                    </div>
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
                <Close />
              </button>
              {deleteSub ? (
                <div className="delete-dialog">
                  <h3 className="title">Delete Subscription</h3>
                  <p>Are you sure you want to delete this subscription?</p>
                  <ViewSubscription subscription={deleteSub} />
                  <div className="delete-button-group">
                    <button
                      onClick={() => {
                        handleDelete(deleteSub);
                        handleDialogClose();
                      }}
                      className="delete-button"
                    >
                      Delete
                    </button>
                    <button
                      onClick={handleDialogClose}
                      className="cancel-button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {view && !deleteSub ? (
                    <ViewSubscription subscription={subscription} />
                  ) : (
                    <AddSubscriptionForm
                      subscription={subscription}
                      onSubmit={getSubscriptions}
                    />
                  )}
                </>
              )}
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default Subscriptions;
