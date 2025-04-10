import LoadingDumbbell from "./loading-dumbbell";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <LoadingDumbbell />
      <div className="loader-text">Loading ...</div>
    </div>
  );
};

export default Loader;
