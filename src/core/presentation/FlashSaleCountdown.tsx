import React from "react";
import { Box, Text, HStack } from "native-base";

import { AntDesign } from "@expo/vector-icons";
import CountDown from "react-native-countdown-component";

const FlashSaleCountdown = () => {
  return (
    <Box bg="red.100">
      <HStack p={3}>
        <AntDesign
          name="minuscircle"
          size={20}
          color="darkred"
          style={{ marginRight: 20 }}
        />
        <Text bold>Berakhir Dalam</Text>
        <Box position="absolute" right={0} p={1.5}>
          <CountDown
            showSeparator
            size={12}
            until={3600000}
            timeToShow={["H", "M", "S"]}
            timeLabels={{ h: "", m: "", s: "" }}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default FlashSaleCountdown;
