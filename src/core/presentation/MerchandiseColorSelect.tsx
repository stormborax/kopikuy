import React from "react";
import { Box, HStack, Select, Text } from "native-base";

const MerchandiseColorSelect = () => {
  return (
    <Box>
      <HStack>
        <Text p={2} py={6} fontSize="md">
          Warna
        </Text>
        <Box alignItems="center" py={2} px={5}>
          <Select
            placeholder="Pilih warna yang kamu inginkan"
            minWidth={300}
            bg="gray.200"
          >
            <Select.Item label="Full Tumbler - Baby Pink" value="pink" />
            <Select.Item label="Full Tumbler - Baby Blue" value="blue" />
            <Select.Item label="Full Tumbler - Black" value="black" />
          </Select>
        </Box>
      </HStack>
    </Box>
  );
};

export default MerchandiseColorSelect;
