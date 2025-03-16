import { useEffect, useState } from "react";
import Edit from "../../components/icons/edit";
import View from "../../components/icons/view";
import Delete from "../../components/icons/delete";
import Layout from "../../components/layout/layout";
import AddMemberForm from "../../components/add-member-form/add-member-form";
import { fetchUsers } from "../../helper/apis";
import "./members.css";
import Loader from "../../components/loader/loader";

const Members = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [view, setView] = useState(false);

  useEffect(() => {
    const getAllUsers = async () => {
      setLoading(true);
      const users = await fetchUsers();
      setUsers(users);
      setLoading(false);
    };
    getAllUsers();
  }, []);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setUser(null);
  };

  return (
    <div className="members-container">
      <Layout title="Members">
        <h2>Gym Members</h2>
        <button className="add-member" onClick={handleDialogOpen}>
          Add Member
        </button>
        {loading && <Loader />}
        {users.length !== 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone No</th>
                {/* <th>Email ID</th>
                <th>Subscription ID</th> */}
                <th>Joining Date</th>
                {/* <th>Amount</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.phoneNo.replace(/.(?=.{4})/g, "*")}</td>
                  {/* <td>
                    {user.emailId.replace(
                      /(.{2})(.*)(?=@)/,
                      (_, a, b) => a + b.replace(/./g, "*")
                    )}
                  </td> 
                  <td>{user.subscriptionId}</td> */}
                  <td>{new Date(user.joiningDate).toLocaleDateString()}</td>
                  {/* <td>₹{user.amount}</td> */}
                  <td className="action">
                    <button
                      onClick={() => {
                        setUser(user);
                        setView(true);
                        handleDialogOpen();
                      }}
                    >
                      <View />
                    </button>
                    <button
                      onClick={() => {
                        setUser(user);
                        setView(false);
                        handleDialogOpen();
                      }}
                    >
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
              {view ? (
                <ViewMember user={user} />
              ) : (
                <AddMemberForm user={user} />
              )}
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default Members;

const ViewMember = ({ user }) => {
  return (
    <div className="user-card">
      <h3 className="title">Member Details</h3>
      <table className="user-details-table">
        <tbody>
          <tr>
            <td>Name - </td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Phone No - </td>
            <td>{user.phoneNo}</td>
          </tr>
          <tr>
            <td>Email - </td>
            <td>{user.emailId}</td>
          </tr>
          <tr>
            <td>Joining Date - </td>
            <td>{new Date(user.joiningDate).toLocaleString()}</td>
          </tr>
          <tr>
            <td>Subscription ID - </td>
            <td>{user.subscriptionId}</td>
          </tr>
          <tr>
            <td>Amount - </td>
            <td>₹{user.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
