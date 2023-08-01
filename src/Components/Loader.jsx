import animationData from "../images/animation_lkqjxe4g.json"
import Lottie from "react-lottie";

export default function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className="flex justify-center items-center">
            <Lottie 
              options={defaultOptions}
              height={700}
              width={700}
            /> 
      </div>
    );
  }