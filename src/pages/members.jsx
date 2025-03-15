import Edit from "../components/icons/edit";
import View from "../components/icons/view";
import Delete from "../components/icons/delete";
import Layout from "../components/layout";
import "./members.css";
import AddMemberForm from "../components/add-member-form";
import { useState } from "react";

const users = [
  {
    name: "Ankit Yadav",
    phoneNo: "8175963182",
    emailId: "ankityadav@gmail.com",
    subscriptionId: 300,
    joiningDate: "2025-03-15T10:12:25.094+00:00",
    amount: 4200,
  },
  {
    name: "Ankit Yadav",
    phoneNo: "8175963182",
    emailId: "ankityadav@gmail.com",
    subscriptionId: 300,
    joiningDate: "2025-03-15T10:12:25.094+00:00",
    amount: 4200,
  },
  {
    name: "Ankit Yadav",
    phoneNo: "8175963182",
    emailId: "ankityadav@gmail.com",
    subscriptionId: 300,
    joiningDate: "2025-03-15T10:12:25.094+00:00",
    amount: 4200,
  },
  {
    name: "Ankit Yadav",
    phoneNo: "8175963182",
    emailId: "ankityadav@gmail.com",
    subscriptionId: 300,
    joiningDate: "2025-03-15T10:12:25.094+00:00",
    amount: 4200,
  },
  {
    name: "Ankit Yadav",
    phoneNo: "8175963182",
    emailId: "ankityadav@gmail.com",
    subscriptionId: 300,
    joiningDate: "2025-03-15T10:12:25.094+00:00",
    amount: 4200,
  },
  {
    name: "Ankit Yadav",
    phoneNo: "8175963182",
    emailId: "ankityadav@gmail.com",
    subscriptionId: 300,
    joiningDate: "2025-03-15T10:12:25.094+00:00",
    amount: 4200,
  },
  {
    name: "Ankit Yadav",
    phoneNo: "8175963182",
    emailId: "ankityadav@gmail.com",
    subscriptionId: 300,
    joiningDate: "2025-03-15T10:12:25.094+00:00",
    amount: 4200,
  },
  {
    name: "Ankit Yadav",
    phoneNo: "8175963182",
    emailId: "ankityadav@gmail.com",
    subscriptionId: 300,
    joiningDate: "2025-03-15T10:12:25.094+00:00",
    amount: 4200,
  },
  {
    name: "Ankit Yadav",
    phoneNo: "8175963182",
    emailId: "ankityadav@gmail.com",
    subscriptionId: 300,
    joiningDate: "2025-03-15T10:12:25.094+00:00",
    amount: 4200,
  },
];

const Members = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="members-container">
      <Layout>
        <h2>Gym Members</h2>
        <button className="add-member" onClick={handleDialogOpen}>
          Add Member
        </button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No</th>
              <th>Email ID</th>
              <th>Subscription ID</th>
              <th>Joining Date</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.phoneNo.replace(/.(?=.{4})/g, "*")}</td>
                <td>
                  {user.emailId.replace(
                    /(.{2})(.*)(?=@)/,
                    (_, a, b) => a + b.replace(/./g, "*")
                  )}
                </td>
                <td>{user.subscriptionId}</td>
                <td>{new Date(user.joiningDate).toLocaleDateString()}</td>
                <td>${user.amount}</td>
                <td className="action">
                  <button>
                    <View />
                  </button>
                  <button>
                    <Edit />
                  </button>
                  <button>
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
              <AddMemberForm />
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default Members;
