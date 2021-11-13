import * as React from "react";

import Svg, { SvgProps, Path } from "react-native-svg";

export function PlusAsset(props: SvgProps) {
  return (
    <Svg width={30} height={30} fill="none" {...props}>
      <Path
        d="M15 0C6.715 0 0 6.715 0 15s6.715 15 15 15 15-6.715 15-15S23.285 0 15 0zm7.5 16.5h-6v6h-3v-6h-6v-3h6v-6h3v6h6v3z"
        fill="#fff"
      />
    </Svg>
  );
}
