import React from "react";
import { Box, HStack, Input } from "native-base";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
const MyVoucherScreen: React.FC = ({ route }) => {
  return (
    <Box p={4} flex={1} bgColor="white">
      <HStack
        borderColor="#C2925B"
        borderRadius={6}
        borderWidth={2}
        alignItems="center"
        justifyContent="space-between"
        space={2}
      >
        <Box mx={4}>
          <MaterialCommunityIcons
            name="ticket-percent-outline"
            size={32}
            color="#c47134"
          />
        </Box>
        <Input
          w="90%"
          variant="unstyled"
          pl={0}
          placeholder="Punya kode voucher?"
        />
      </HStack>
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

export default MyVoucherScreen;
