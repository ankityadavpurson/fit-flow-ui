import { useEffect, useState } from "react";
import Edit from "../../components/icons/edit";
import View from "../../components/icons/view";
import Delete from "../../components/icons/delete";
import Layout from "../../components/layout/layout";
import AddMemberForm from "../../components/add-member-form/add-member-form";
import { deleteUser, fetchUsers } from "../../helper/apis";
import "./members.css";
import Loader from "../../components/loader/loader";
import { maskEmailId, maskPhoneNo } from "../../helper/utils";

const Members = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [view, setView] = useState(false);
  const [deleteMember, setDeleteMember] = useState(null);

  const getAllUsers = async () => {
    setLoading(true);
    const users = await fetchUsers();
    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setUser(null);
  };

  const handleDeleteDialog = (member) => {
    setDeleteMember(member);
    setIsDialogOpen(true);
  };

  const handleDelete = async (member) => {
    const deleted = await deleteUser(member.phoneNo);
    if (deleted) getAllUsers();
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
                {/* <th>Email ID</th> */}
                <th>ID</th>
                <th>Joining Date</th>
                {/* <th>Amount</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{maskPhoneNo(user.phoneNo)}</td>
                  {/* <td>{maskEmailId(user.emailId)}</td> */}
                  <td>{user.subscriptionId}</td>
                  <td>{new Date(user.joiningDate).toLocaleDateString()}</td>
                  {/* <td>₹{user.amount}</td> */}
                  <td>
                    <div className="action">
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
                      <button onClick={() => handleDeleteDialog(user)}>
                        <Delete />
                      </button>
                    </div>
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

              {deleteMember ? (
                <div className="delete-dialog">
                  <h3 className="title">Delete Subscription</h3>
                  <p>Are you sure you want to delete this subscription?</p>
                  <ViewMember member={deleteMember} />
                  <div className="delete-button-group">
                    <button
                      onClick={() => {
                        handleDelete(deleteMember);
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
                  {view ? (
                    <ViewMember member={user} />
                  ) : (
                    <AddMemberForm user={user} onSubmit={getAllUsers} />
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

export default Members;

const ViewMember = ({ member }) => {
  return (
    <div className="user-card">
      <h3 className="title">Member Details</h3>
      <table className="user-details-table">
        <tbody>
          <tr>
            <td>Name - </td>
            <td>{member?.name}</td>
          </tr>
          <tr>
            <td>Phone No - </td>
            <td>{maskPhoneNo(member?.phoneNo)}</td>
          </tr>
          <tr>
            <td>Email - </td>
            <td>{maskEmailId(member?.emailId)}</td>
          </tr>
          <tr>
            <td>Joining Date - </td>
            <td>{new Date(member?.joiningDate).toLocaleString()}</td>
          </tr>
          <tr>
            <td>Subscription ID - </td>
            <td>{member?.subscriptionId}</td>
          </tr>
          <tr>
            <td>Amount - </td>
            <td>₹{member?.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
