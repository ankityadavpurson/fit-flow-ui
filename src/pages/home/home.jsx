import Layout from "../../components/layout/layout";
import "./home.css";
import TotalMembers from "./kpis/total-members";
import TotalPayments from "./kpis/total-payments";

const Home = () => {
  return (
    <div className="home-container">
      <Layout title="Dashboard">
        <h1>Dashboard</h1>
        <div className="kpi-container">
          <TotalMembers />
          <TotalPayments />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
