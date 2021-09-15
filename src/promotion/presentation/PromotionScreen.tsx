import React from "react";
import { View, Text } from "react-native";
import { Button, Box, Icon } from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const PromotionScreen: React.FC = ({ route }) => {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{route.name}</Text>
    </View>
  );
};

export default PromotionScreen;
