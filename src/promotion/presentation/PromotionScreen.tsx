import React from "react";
import { View, Text } from "react-native";
import { Pressable, Box } from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const PromotionScreen: React.FC = ({ route, navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons
          name="brightness-percent"
          size={size}
          color={color}
        />
      ),
      headerTitleAlign: "center",
      headerRight: () => (
        <Box mr={4}>
          <FontAwesome5 name="list-alt" size={24} color="black" />
        </Box>
      ),
    });
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{route.name}</Text>
    </View>
  );
};

export default PromotionScreen;
