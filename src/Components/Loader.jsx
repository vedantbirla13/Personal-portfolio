import animationData from "../images/animation_lkqjxe4g.json";
import { useLottie } from "lottie-react";

export default function Loader() {
  const options = {
    animationData: animationData,
    loop: true,
    height: 600
  };

  const { View } = useLottie(options);

  return <div className="flex justify-center items-center h-screen">{View}</div>;
}
