import animationData from "../images/animation_lkqjxe4g.json"
import { useLottie } from "lottie-react";

export default function Loader() {
  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);

  return <div className="flex justify-center items-center">
    {View}
    </div>;
  }