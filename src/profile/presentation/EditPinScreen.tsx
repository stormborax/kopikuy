import React, { useState } from "react";
import { Box, Center, HStack, Text, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { ToastAndroid } from "react-native";

const EditPinScreen: React.FC = ({ navigation }) => {
  const [pin, setpin] = useState<string[]>([]);
  const onKeyNumberPress = (value: string) => showToast(value);
  const onKeyRemovePress = () => {
    const temp = pin;
    temp.pop();
    setpin(temp);
    console.log(pin);
    console.log(pin.length);
  };
  const showToast = (text: string) => {
    setpin([...pin, text]);
    ToastAndroid.show(text, ToastAndroid.SHORT);
    console.log(pin);
  };
  return (
    <Box flex={1} bg="white" alignItems="center">
      <Text bold={true} fontSize="2xl" mt={8}>
        PIN Lama
      </Text>
      <Text mt={8}>Masukkan 6 angka PIN akun Kopi Kuy kamu</Text>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        py={4}
      >
        <Box mx={2}>
          {pin.length >= 1 ? (
            <FontAwesome name="circle" size={48} color="black" />
          ) : (
            <FontAwesome name="circle-thin" size={48} color="black" />
          )}
        </Box>
        <Box mx={2}>
          {pin.length >= 2 ? (
            <FontAwesome name="circle" size={48} color="black" />
          ) : (
            <FontAwesome name="circle-thin" size={48} color="black" />
          )}
        </Box>
        <Box mx={2}>
          {pin.length >= 3 ? (
            <FontAwesome name="circle" size={48} color="black" />
          ) : (
            <FontAwesome name="circle-thin" size={48} color="black" />
          )}
        </Box>
        <Box mx={2}>
          {pin.length >= 4 ? (
            <FontAwesome name="circle" size={48} color="black" />
          ) : (
            <FontAwesome name="circle-thin" size={48} color="black" />
          )}
        </Box>
        <Box mx={2}>
          {pin.length >= 5 ? (
            <FontAwesome name="circle" size={48} color="black" />
          ) : (
            <FontAwesome name="circle-thin" size={48} color="black" />
          )}
        </Box>
        <Box mx={2}>
          {pin.length >= 6 ? (
            <FontAwesome name="circle" size={48} color="black" />
          ) : (
            <FontAwesome name="circle-thin" size={48} color="black" />
          )}
        </Box>
      </Box>
      <VStack mb={10} position="absolute" bottom={0}>
        <HStack alignItems="center">
          <Center w="33%">
            <Text
              fontSize="2xl"
              p={4}
              bold
              onPress={() => onKeyNumberPress("1")}
            >
              1
            </Text>
          </Center>
          <Center w="33%">
            <Text
              fontSize="2xl"
              p={4}
              bold
              onPress={() => onKeyNumberPress("2")}
            >
              2
            </Text>
          </Center>
          <Center w="33%">
            <Text
              fontSize="2xl"
              p={4}
              bold
              onPress={() => onKeyNumberPress("3")}
            >
              3
            </Text>
          </Center>
        </HStack>
        <HStack alignItems="center">
          <Center w="33%">
            <Text
              fontSize="2xl"
              p={4}
              bold
              onPress={() => onKeyNumberPress("4")}
            >
              4
            </Text>
          </Center>
          <Center w="33%">
            <Text
              fontSize="2xl"
              p={4}
              bold
              onPress={() => onKeyNumberPress("5")}
            >
              5
            </Text>
          </Center>
          <Center w="33%">
            <Text
              fontSize="2xl"
              p={4}
              bold
              onPress={() => onKeyNumberPress("6")}
            >
              6
            </Text>
          </Center>
        </HStack>
        <HStack alignItems="center">
          <Center w="33%">
            <Text
              fontSize="2xl"
              p={4}
              bold
              onPress={() => onKeyNumberPress("7")}
            >
              7
            </Text>
          </Center>
          <Center w="33%">
            <Text
              fontSize="2xl"
              p={4}
              bold
              onPress={() => onKeyNumberPress("8")}
            >
              8
            </Text>
          </Center>
          <Center w="33%">
            <Text
              fontSize="2xl"
              p={4}
              bold
              onPress={() => onKeyNumberPress("9")}
            >
              9
            </Text>
          </Center>
        </HStack>
        <HStack alignItems="center">
          <Center py={4} w="33%">
            <Text fontSize="2xl" bold></Text>
          </Center>
          <Center w="33%">
            <Text
              fontSize="2xl"
              p={4}
              bold
              onPress={() => onKeyNumberPress("0")}
            >
              0
            </Text>
          </Center>
          <Center w="33%">
            <Text fontSize="2xl" p={4} bold onPress={onKeyRemovePress}>
              X
            </Text>
          </Center>
        </HStack>
      </VStack>
    </Box>
  );
};

export default EditPinScreen;
