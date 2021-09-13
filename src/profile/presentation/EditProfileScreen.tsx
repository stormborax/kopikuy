import React from "react";
import { Box, ScrollView, Text, Input, HStack, Button } from "native-base";
import { Feather } from "@expo/vector-icons";
import { fontSize } from "styled-system";

const EditProfileScreen: React.FC = ({ route }) => {
  return (
    <Box flex={1} safeAreaTop>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box px={4} pt={4} flex={1} bg="white">
          <Text fontSize="sm">Nama</Text>
          <Input
            my={2}
            w="100%"
            variant="filled"
            value="Storm Borax"
            size="xs"
          />
          <Text mt={2} fontSize="sm">
            Email
          </Text>
          <Input
            my={2}
            w="100%"
            variant="filled"
            value="stormborax@gmail.com"
            size="xs"
          />
          <HStack
            mx={2}
            alignItems="center"
            justifyContent="space-between"
            space={2}
          >
            <Box w="10%">
              <Feather name="smartphone" size={24} color="black" />
            </Box>
            <Input
              w="90%"
              variant="underlined"
              value="085235400157"
              color="gray.400"
            />
          </HStack>
          <HStack
            mx={2}
            alignItems="center"
            justifyContent="space-between"
            space={2}
          >
            <Box w="10%">
              <Feather name="key" size={24} color="black" />
            </Box>
            <Input
              w="90%"
              variant="underlined"
              value="Ganti PIN"
              color="blue.500"
            />
          </HStack>
          <Text mt={2} fontSize="sm">
            Tanggal Lahir
          </Text>
          <Input my={2} w="100%" variant="filled" value="2005-08-18" />
          <Text mt={2} fontSize="sm">
            Kota
          </Text>
          <Input my={2} w="100%" variant="filled" value="Malang" />
          <HStack
            mx={2}
            alignItems="center"
            justifyContent="space-between"
            space={2}
          >
            <Box w="10%">
              <Feather name="log-out" size={24} color="black" />
            </Box>
            <Input
              w="90%"
              variant="underlined"
              value="Logout"
              color="red.700"
            />
          </HStack>
        </Box>
      </ScrollView>
      <HStack safeAreaBottom justifyContent="center" py={3} bgColor="white">
        <Button
          w="95%"
          bg="#BA2025"
          colorScheme="orange"
          _text={{ fontWeight: "bold", fontSize: "lg" }}
        >
          SIMPAN PROFIL
        </Button>
      </HStack>
    </Box>
  );
};

export default EditProfileScreen;
