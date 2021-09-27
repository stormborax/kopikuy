import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, VStack, Text } from "native-base";

import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const CataloguePickerButton = () => {
  return (
    <TouchableOpacity>
      <Box bg="white" p={3}>
        <VStack alignItems="center">
          <Entypo name="heart-outlined" />
          <Text>Favorite</Text>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default CataloguePickerButton;
