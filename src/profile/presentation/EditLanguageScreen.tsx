import React from "react";
import { Box, Text } from "native-base";

const EditLanguageScreen: React.FC = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
    });
  });
  return (
    <Box px={4} pt={4} flex={1} alignItems="center" bg="white">
      <Text fontSize="2xl" color="grey" bold mt={4}>
        {route.name}
      </Text>
    </Box>
  );
};

export default EditLanguageScreen;
