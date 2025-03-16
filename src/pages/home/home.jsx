import Layout from "../../components/layout/layout";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Layout title="Dashboard">
        <h1>Dashboard</h1>
        <div className="kpi-container">
          <div className="kpi-card">
            <h3>Total Members</h3>
            <p>250</p>
          </div>
          <div className="kpi-card">
            <h3>Payments Received</h3>
            <p>₹12,500</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
