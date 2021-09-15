import React from "react";
import { Box, Text } from "native-base";

const VoucherPackageScreen: React.FC = ({ route }) => {
  return (
    <Box p={4} flex={1} bgColor="white">
      <Text fontSize="lg" bold>
        Tersedia
      </Text>
      <Box
        bg="white"
        py={4}
        px={3}
        mt={4}
        rounded="md"
        alignSelf="center"
        minH="100px"
        w="100%"
        borderRadius={8}
        shadow={1}
      />
    </Box>
  );
};

export default VoucherPackageScreen;
