import { maskEmailId, maskPhoneNo } from "../../helper/utils";

const ViewMember = ({ member }) => {
  return (
    <div className="user-card">
      <h3 className="title">Member Details</h3>
      <table className="user-details-table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{member?.name}</td>
          </tr>
          <tr>
            <td>Phone No</td>
            <td>{maskPhoneNo(member?.phoneNo)}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{maskEmailId(member?.emailId)}</td>
          </tr>
          <tr>
            <td>Joining Date</td>
            <td>{new Date(member?.joiningDate).toLocaleString()}</td>
          </tr>
          <tr>
            <td>Subscription ID</td>
            <td>{member?.subscriptionId}</td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>₹{member?.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewMember;
