import Dumbbell from "../icons/dumbbell";
import "./loader.css";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "#fff",
        flexDirection: "column",
      }}
    >
      <div className="loader">
        <Dumbbell />
      </div>
      <div>Loading ...</div>
    </div>
  );
};

export default Loader;
