import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, Image } from "react-native";
import styles from "./screenheader.style";

interface ScreenHeaderBtnProps {
  iconUrl: number;
  dimensions: string;
  handlePress?: VoidFunction;
}

const ScreenHeaderBtn = ({
  iconUrl,
  dimensions,
  handlePress,
}: ScreenHeaderBtnProps): JSX.Element => {
  return (
    <TouchableOpacity>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
