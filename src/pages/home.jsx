import Layout from "../components/layout";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Layout>
        <h1>Admin Dashboard</h1>
        <div className="kpi-container">
          <div className="kpi-card">
            <h3>Total Users</h3>
            <p>250</p>
          </div>
          <div className="kpi-card">
            <h3>Payments Received</h3>
            <p>$12,500</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
