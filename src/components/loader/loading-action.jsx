import LoadingDumbbell from "./loading-dumbbell";

const LoadingAction = ({ text }) => {
  return (
    <div className="loading-container">
      <LoadingDumbbell />
      <p>{text || "Loading ..."}</p>
    </div>
  );
};

export default LoadingAction;
