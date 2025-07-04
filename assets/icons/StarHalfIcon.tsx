import React from "react";
import { IconType } from "@/utils/types";
import { useColorScheme } from "react-native";
import { colorSchemes } from "@/utils/_variables";
import { blackColor, whiteColor } from "../colors";
import { Path, Svg } from "react-native-svg";
import { useActionContext } from "@/context";

const StarHalfIcon: React.FC<IconType> = ({ size = 20, color, ...props }) => {
  const { colorScheme } = useActionContext();
  if (!color) {
    color =
      colorScheme === colorSchemes.dark
        ? whiteColor.default
        : blackColor.default;
  }
  return (
    <Svg width={size} height={size} viewBox="0 0 11 11" fill="none" {...props}>
      {/* <rect width="19" height="19" fill="#00AC35" /> */}
      <Path
        d="M6.84032 7.21529L6.45032 5.89362L7.42532 5.20029H6.21199L5.80032 3.85695V6.41362L6.84032 7.21529ZM4.19699 8.72112C4.03088 8.85112 3.86116 8.85473 3.68782 8.73195C3.51449 8.60917 3.45671 8.44667 3.51449 8.24445L4.13199 6.24029L2.56116 5.12445C2.38782 5.00168 2.33554 4.83917 2.40429 4.63695C2.47276 4.43473 2.61171 4.33362 2.82116 4.33362H4.76032L5.38866 2.25362C5.42477 2.15251 5.48081 2.0748 5.55679 2.02049C5.63248 1.96646 5.71366 1.93945 5.80032 1.93945C5.88699 1.93945 5.96817 1.96646 6.04386 2.02049C6.11984 2.0748 6.17588 2.15251 6.21199 2.25362L6.84032 4.33362H8.77949C8.98894 4.33362 9.12804 4.43473 9.19679 4.63695C9.26526 4.83917 9.21283 5.00168 9.03949 5.12445L7.46866 6.24029L8.08616 8.24445C8.14394 8.44667 8.08616 8.60917 7.91282 8.73195C7.73949 8.85473 7.56977 8.85112 7.40366 8.72112L5.80032 7.49695L4.19699 8.72112Z"
        fill={color}
      />
    </Svg>
  );
};

export default StarHalfIcon;
