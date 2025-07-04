import { IconType } from "@/utils/types";
import { colorSchemes } from "@/utils/_variables";
import { useColorScheme } from "react-native";
import { blackColor, whiteColor } from "../colors";
import { Path, Svg } from "react-native-svg";
import { useActionContext } from "@/context";

const EyeIcon: React.FC<IconType> = ({ size = 20, color, ...props }) => {
  const { colorScheme } = useActionContext();
  if (!color) {
    color =
      colorScheme === colorSchemes.dark
        ? whiteColor.default
        : blackColor.default;
  }
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M3.33066 12.8234C4.10701 9.09537 7.35242 6.44645 11.0031 6.44645C14.6526 6.44645 17.898 9.09537 18.6755 12.8234C18.7063 12.9714 18.7946 13.101 18.921 13.1838C19.0474 13.2667 19.2015 13.2959 19.3494 13.2651C19.4973 13.2343 19.627 13.146 19.7098 13.0196C19.7926 12.8933 19.8219 12.7392 19.7911 12.5912C18.9066 8.35089 15.207 5.30811 11.0031 5.30811C6.79919 5.30811 3.09958 8.35089 2.21508 12.5912C2.18429 12.7392 2.21352 12.8933 2.29635 13.0196C2.37918 13.146 2.50883 13.2343 2.65676 13.2651C2.8047 13.2959 2.9588 13.2667 3.08518 13.1838C3.21156 13.101 3.29986 12.9714 3.33066 12.8234ZM10.9917 8.72313C12.0484 8.72313 13.0618 9.14289 13.809 9.89008C14.5561 10.6373 14.9759 11.6507 14.9759 12.7073C14.9759 13.764 14.5561 14.7774 13.809 15.5246C13.0618 16.2718 12.0484 16.6915 10.9917 16.6915C9.93503 16.6915 8.92163 16.2718 8.17445 15.5246C7.42727 14.7774 7.0075 13.764 7.0075 12.7073C7.0075 11.6507 7.42727 10.6373 8.17445 9.89008C8.92163 9.14289 9.93503 8.72313 10.9917 8.72313Z"
        fill={color}
      />
    </Svg>
  );
};

export default EyeIcon;
