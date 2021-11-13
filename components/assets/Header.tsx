import * as React from "react";
import { Dimensions } from "react-native";

import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

export function HeaderAsset(props: SvgProps) {
  const width = Dimensions.get("window").width;

  return (
    <Svg width={width} height={width * 0.74} fill="none" {...props}>
      <Path
        d="M856 0v212.37c-94.28 3.74-188.57 7.48-306.35 20.39-117.79 12.91-259.07 35-384.93 33.13-125.86-1.87-236.29-27.7-346.72-53.52V0H856z"
        fill="url(#prefix__a)"
      />
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={783.34}
          y1={66.5}
          x2={589.04}
          y2={507.32}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.05} stopColor="#2286C5" />
          <Stop offset={0.95} stopColor="#18BAE0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
