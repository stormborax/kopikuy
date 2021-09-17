import React from "react";
import {
  Box,
  HStack,
  VStack,
  Center,
  Heading,
  Text,
  Image,
  Button,
} from "native-base";

const ReorderCard = () => {
  return (
    <Box my={3} bg="white" shadow={2} rounded="lg" width="45%" px={1}>
      <Heading px={4} py={2} size="sm" fontSize={12} bold color="yellow.500">
        Ruko Sarinah Malang
      </Heading>
      <HStack>
        <VStack py={2} px={4}>
          <Box width="70%">
            <Heading size="sm" fontSize={13} bold noOfLines={2}>
              2 Kopi Kenangan Mantan - L
            </Heading>
            <Button
              py={2}
              my={1}
              _text={{ fontSize: "sm", color: "white" }}
              bg="red.600"
              size="sm"
            >
              Order
            </Button>
          </Box>
        </VStack>
        <Box width="15%">
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1x6reDpMwrrqKM7qwFqouHJVSqfd1Xn0tcg&usqp=CAU",
            }}
            alt="image base"
            resizeMode="cover"
            height={100}
            width={100}
            roundedTop="md"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default ReorderCard;
