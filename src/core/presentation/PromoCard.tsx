import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, HStack, VStack, Text, Heading, Avatar } from "native-base";

const PromoCard = () => {
  return (
    <Box my={3} bg="white" shadow={2} rounded="lg" width="50%" px={1}>
      <TouchableOpacity onPress={() => console.log("promo card pressed")}>
        <Heading px={4} py={2} size="sm" fontSize={12} bold color="yellow.500">
          ShopeePay
        </Heading>
        <HStack>
          <VStack py={2} px={4}>
            <Heading size="sm" fontSize={13} bold>
              Hemat 100%
            </Heading>
            <Text fontSize={13} noOfLines={2}>
              Min. Order Rp. 0 Kuota terbatas
            </Text>
          </VStack>
          <Avatar
            size="md"
            source={{
              uri: "https://aromaincense.id/wp-content/uploads/2018/10/shopee-icon-png-5.png",
            }}
          />
        </HStack>
      </TouchableOpacity>
    </Box>
  );
};

export default PromoCard;
