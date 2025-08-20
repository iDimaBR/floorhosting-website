"use client";

import Player, { useLottie } from "lottie-react";
import animationData from "../../public/host.json";

export default function LottieAnimation() {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div style={{ margin: "0 auto" }}>{View}</div>;
}
