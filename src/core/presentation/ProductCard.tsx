import React from "react";
import { Box, Image, Text, Heading, Stack } from "native-base";

const ProductCard = () => {
  return (
    <Box bg="white" shadow={2} rounded="lg" maxWidth="100%" px={1}>
      <Image
        source={{
          uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png",
        }}
        alt="image base"
        resizeMode="cover"
        height={200}
        roundedTop="md"
      />
      <Box
        bg="red.700"
        px={2}
        py={2}
        style={{ position: "absolute", top: 0 }}
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Promo
      </Box>
      <Stack space={4} p={[4, 4, 8]}>
        <Heading size={"md"} noOfLines={2}>
          Light Kopi Kenangan Mantan
        </Heading>
        <Text lineHeight={[5, 5, 7]} color="gray.700">
          Rp. 18.000,00
        </Text>
      </Stack>
    </Box>
  );
};

export default ProductCard;
