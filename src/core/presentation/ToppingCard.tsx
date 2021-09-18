import React from "react";
import { Box, Image, Text, Center } from "native-base";

const ToppingCard = () => {
  return (
    <Box bg="white" shadow={2} rounded="lg" width="100%">
      <Image
        source={{
          uri: "https://id.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/espresso_doppio_2000x1400px.jpg?la=en&hash=867F3CFC6E779E5200389F39DA6C0A6B71D2D321",
        }}
        alt="image base"
        resizeMode="cover"
        height={150}
        width={150}
        roundedTop="md"
      />
      <Center>
        <Text fontSize="sm" bold color="#27272a">
          Espresso
        </Text>
      </Center>
    </Box>
  );
};

export default ToppingCard;
