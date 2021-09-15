import React from "react";
import { Box, Input, Pressable, HStack, Text, Divider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const MyAddressScreen: React.FC = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
    });
  });
  return (
    <Box px={4} pt={4} flex={1} bg="white">
      <Pressable onPress={() => navigation.navigate("Ganti PIN")}>
        <HStack
          mx={2}
          alignItems="center"
          justifyContent="space-between"
          space={2}
        >
          <Box w="10%">
            <MaterialIcons name="add" size={24} color="black" />
          </Box>
          <Input
            isReadOnly={true}
            w="90%"
            variant="underlined"
            pl={0}
            value="Tambah Alamat Baru"
            color="blue.500"
          />
        </HStack>
      </Pressable>
      <Box flex={1} alignItems="center" mt={8}>
        <MaterialIcons name="location-city" size={60} color="grey" />
        <Text fontSize="2xl" color="grey" bold mt={4}>
          Tidak ada alamat
        </Text>
        <Text>Tambahkan alamat baru sekarang</Text>
        <Divider mt={8} />
      </Box>
    </Box>
  );
};

export default MyAddressScreen;
