import React from "react";
import { Box, HStack, VStack, Heading, Text, Divider } from "native-base";

import { Feather } from "@expo/vector-icons";

const BundleItemCard = (props) => {
  return (
    <Box>
      <HStack>
        <VStack p={1}>
          <Heading size="sm">Kopi Kenangan Mantan</Heading>
          <Text fontSize="sm">Cold, Regular, Normal Sugar, Normal Ice</Text>
        </VStack>
        <Feather
          onPress={() => props.navigation.navigate("Deskripsi")}
          name="edit"
          size={22}
          style={{
            position: "absolute",
            right: 0,
            paddingTop: 10,
            paddingRight: 20,
            color: "brown",
          }}
        />
      </HStack>
      <Divider />
    </Box>
  );
};

export default BundleItemCard;
