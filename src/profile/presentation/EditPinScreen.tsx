import React from "react";
import { Box, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

const EditPinScreen: React.FC = ({ navigation }) => {
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
          <FontAwesome name="circle-thin" size={48} color="black" />
        </Box>
        <Box mx={2}>
          <FontAwesome name="circle-thin" size={48} color="black" />
        </Box>
        <Box mx={2}>
          <FontAwesome name="circle-thin" size={48} color="black" />
        </Box>
        <Box mx={2}>
          <FontAwesome name="circle-thin" size={48} color="black" />
        </Box>
        <Box mx={2}>
          <FontAwesome name="circle-thin" size={48} color="black" />
        </Box>
        <Box mx={2}>
          <FontAwesome name="circle-thin" size={48} color="black" />
        </Box>
      </Box>
    </Box>
  );
};

export default EditPinScreen;
