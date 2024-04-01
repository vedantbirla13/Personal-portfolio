import animationData from "../utils/images/animation_lkphpscc.json"
import { useLottie } from "lottie-react";

export default function Coding_svg() {
  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
  }