import Layout from "../../components/layout/layout";
import "./not-found.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Layout title="Dashboard">
        <div className="text-container">
          <h1>404! Page Not Found</h1>
        </div>
      </Layout>
    </div>
  );
};

export default NotFound;
