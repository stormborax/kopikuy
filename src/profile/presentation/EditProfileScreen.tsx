import React from "react";
import {
  Box,
  ScrollView,
  Text,
  Input,
  HStack,
  Button,
  Divider,
  Pressable,
} from "native-base";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const EditProfileScreen: React.FC = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
    });
  });
  return (
    <Box flex={1}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        px={4}
        pt={4}
        flex={1}
        bg="white"
      >
        <Text fontSize="sm">Nama</Text>
        <Input my={2} w="100%" variant="filled" value="Storm Borax" size="xs" />
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
            pl={0}
            value="085235400157"
            color="gray.400"
          />
        </HStack>
        <Pressable onPress={() => navigation.navigate("Ganti PIN")}>
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
              isReadOnly={true}
              w="90%"
              variant="underlined"
              pl={0}
              value="Ganti PIN"
              color="blue.500"
            />
          </HStack>
        </Pressable>

        <Text mt={2} fontSize="sm">
          Tanggal Lahir
        </Text>
        <Input my={2} w="100%" variant="filled" value="2005-08-18" />

        <Text mt={2} fontSize="sm">
          Kota
        </Text>
        <Input my={2} w="100%" variant="filled" value="Malang" />
        <Divider mt={2} mb={4} />

        <Text>Hubungkan akun</Text>
        <HStack mt={4} space={2}>
          <Box w="15%">
            <MaterialIcons name="facebook" size={48} color="blue" />
          </Box>
          <Text alignSelf="center" bold>
            Facebook
          </Text>
          <Button
            size="sm"
            position="absolute"
            right={0}
            alignSelf="center"
            colorScheme="blue"
          >
            Hubungkan
          </Button>
        </HStack>
        <HStack pl={1} mt={4} space={1}>
          <Box w="15%">
            <FontAwesome name="google" size={48} color="red" />
          </Box>
          <Text alignSelf="center" bold>
            Google
          </Text>
          <Button
            size="sm"
            position="absolute"
            right={0}
            alignSelf="center"
            colorScheme="blue"
          >
            Hubungkan
          </Button>
        </HStack>

        <HStack
          mx={2}
          mb={8}
          mt={4}
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
            isReadOnly
          />
        </HStack>
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
