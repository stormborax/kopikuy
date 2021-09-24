import React from "react";
import { Box, Text, Progress, VStack } from "native-base";

const FlashSaleProgressBar = () => {
  return (
    <Box>
      <VStack space={2}>
        <Text fontSize="sm" color="yellow.500" bold>
          50% kuota terpakai
        </Text>
        <Progress size="xs" value={50} colorScheme="red" />
      </VStack>
    </Box>
  );
};

export default FlashSaleProgressBar;
