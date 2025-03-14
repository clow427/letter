import Lottie from "lottie-react";
import animationData from "./flower.json";

const MyAnimation = () => {
  return (
    <div style={{ width: "90vw", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Lottie animationData={animationData} loop = {false} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default MyAnimation;
