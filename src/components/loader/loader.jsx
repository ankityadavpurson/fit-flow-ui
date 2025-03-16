import LoadingDumbbell from "./loading-dumbbell";
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
      <LoadingDumbbell />
      <div>Loading ...</div>
    </div>
  );
};

export default Loader;
