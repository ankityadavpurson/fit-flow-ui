import { useEffect, useState } from "react";
import Edit from "../../components/icons/edit";
import View from "../../components/icons/view";
import Delete from "../../components/icons/delete";
import Layout from "../../components/layout/layout";
import AddMemberForm from "../../components/add-member-form/add-member-form";
import "./members.css";

const Members = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://gym-website-demo.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="members-container">
      <Layout title="Members">
        <h2>Gym Members</h2>
        <button className="add-member" onClick={handleDialogOpen}>
          Add Member
        </button>
        {users.length !== 0 && (
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
        )}
        {users.length === 0 && (
          <div className="no-data">
            <p>No members found</p>
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
              <AddMemberForm />
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default Members;
