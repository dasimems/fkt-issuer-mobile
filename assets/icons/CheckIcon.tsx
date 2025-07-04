import React from "react";
import { IconType } from "@/utils/types";
import { useColorScheme } from "react-native";
import { colorSchemes } from "@/utils/_variables";
import { blackColor, whiteColor } from "../colors";
import { Path, Svg } from "react-native-svg";
import { useActionContext } from "@/context";

const CheckIcon: React.FC<IconType> = ({ size = 20, color, ...props }) => {
  const { colorScheme } = useActionContext();
  if (!color) {
    color =
      colorScheme === colorSchemes.dark
        ? whiteColor.default
        : blackColor.default;
  }
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      {/* <rect width="19" height="19" fill="#00AC35" /> */}
      <Path
        d="M10.97 4.97C11.1109 4.83589 11.2984 4.76175 11.4929 4.76322C11.6873 4.76469 11.8737 4.84166 12.0125 4.97789C12.1513 5.11412 12.2318 5.29895 12.2369 5.49338C12.2421 5.68781 12.1715 5.87663 12.04 6.02L8.05004 11.01C7.98143 11.0839 7.89862 11.1432 7.80657 11.1844C7.71452 11.2255 7.61511 11.2477 7.51429 11.2496C7.41347 11.2514 7.31331 11.233 7.21979 11.1952C7.12628 11.1575 7.04133 11.1013 6.97004 11.03L4.32404 8.384C4.25035 8.31534 4.19125 8.23254 4.15025 8.14054C4.10926 8.04854 4.08722 7.94923 4.08544 7.84852C4.08367 7.74782 4.10219 7.64779 4.13991 7.5544C4.17763 7.46102 4.23378 7.37618 4.305 7.30496C4.37622 7.23374 4.46105 7.1776 4.55444 7.13988C4.64783 7.10216 4.74786 7.08363 4.84856 7.08541C4.94926 7.08719 5.04857 7.10923 5.14057 7.15022C5.23257 7.19121 5.31537 7.25031 5.38404 7.324L7.47804 9.417L10.951 4.992C10.9573 4.9843 10.963 4.97696 10.97 4.97Z"
        fill={color}
      />
    </Svg>
  );
};

export default CheckIcon;
