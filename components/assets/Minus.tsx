import * as React from "react";

import Svg, { SvgProps, Path } from "react-native-svg";

export function MinusAsset(props: SvgProps) {
  return (
    <Svg width={30} height={30} fill="none" {...props}>
      <Path
        d="M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm7.5 16.25h-15a1.25 1.25 0 110-2.5h15a1.25 1.25 0 110 2.5z"
        fill="#fff"
      />
    </Svg>
  );
}
