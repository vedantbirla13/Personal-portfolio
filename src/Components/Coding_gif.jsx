import animationData from "../images/animation_lkphpscc.json"
import Lottie from "react-lottie";

export default function Coding_svg() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={420}
          width={600}
        />
      </div>
    );
  }