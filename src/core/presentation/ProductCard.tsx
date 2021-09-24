import React from "react";
import { Box, Image, Text, Heading, Stack, HStack } from "native-base";

import RedPromoTag from "./RedPromoTag";
import NormalPrice from "./NormalPrice";
import FlashSaleProgressBar from "./FlashSaleProgressBar";

const ProductCard = () => {
  return (
    <Box bg="white" shadow={2} rounded="lg" maxWidth="100%" px={1}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1x6reDpMwrrqKM7qwFqouHJVSqfd1Xn0tcg&usqp=CAU",
        }}
        alt="image base"
        resizeMode="cover"
        height={200}
        width={200}
        roundedTop="md"
      />
      <RedPromoTag />
      <Stack space={4} p={[4, 4, 8]}>
        <Heading size={"sm"} noOfLines={2}>
          Kopi Kenangan Mantan
        </Heading>
        <HStack space={2}>
          <Text fontSize="sm" color="red.600" bold>
            Rp. 18.000
          </Text>
          <NormalPrice />
        </HStack>
        <FlashSaleProgressBar />
      </Stack>
    </Box>
  );
};

export default ProductCard;
