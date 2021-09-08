import React from "react";
import { View, Text } from "react-native";
const ProfileScreen: React.FC = ({ route }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{route.name}</Text>
    </View>
  );
};

export default ProfileScreen;
