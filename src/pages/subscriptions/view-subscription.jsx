const ViewSubscription = ({ subscription }) => {
  return (
    <div className="subscription-card">
      <h3 className="title">Subscription Details</h3>
      <table className="subscription-details-table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{subscription.subscriptionId}</td>
          </tr>
          <tr>
            <td>Plan</td>
            <td>{subscription.subscriptionPlan}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{subscription.subscriptionPrice}</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>{subscription.subscriptionDiscount}</td>
          </tr>
          <tr>
            <td>Offer</td>
            <td>{subscription.subscriptionOffer}</td>
          </tr>
          <tr>
            <td>Details</td>
            <td>{subscription.subscriptionDetails}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewSubscription;
