import Layout from "../components/layout";
import "./users.css";

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

const Users = () => {
  return (
    <div className="users-container">
      <Layout>
        <h2>Gym Members</h2>
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
                    <img
                      src="https://www.svgrepo.com/show/500736/view.svg"
                      height={20}
                      width={20}
                    />
                  </button>
                  <button>
                    <img
                      src="https://www.svgrepo.com/show/522525/edit-2.svg"
                      height={20}
                      width={20}
                    />
                  </button>
                  <button>
                    <img
                      src="https://www.svgrepo.com/show/500535/delete.svg"
                      height={20}
                      width={20}
                    />
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

export default Users;
