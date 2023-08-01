import animationData from "../images/animation_lks60cxq.json"
import { useLottie } from "lottie-react";

export default function Coding_svg() {
  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
  }