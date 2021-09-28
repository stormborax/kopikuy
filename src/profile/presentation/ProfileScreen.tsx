import React from "react";
import {
  Box,
  Heading,
  Button,
  VStack,
  HStack,
  Divider,
  Text,
} from "native-base";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

const ProfileScreen: React.FC = ({ navigation }) => {
  return (
    <Box px={4} pt={8} flex={1} safeArea bg="white">
      <Heading size="lg">Storm Borax</Heading>
      <Button
        p={0}
        mt={2}
        size="sm"
        variant="ghost"
        alignSelf="baseline"
        colorScheme="blue"
        onPress={() => navigation.navigate("Edit Profile")}
      >
        Edit Profil
      </Button>
      <Box
        bg="white"
        py={4}
        px={3}
        mt={4}
        rounded="md"
        alignSelf="center"
        width={375}
        maxWidth="100%"
        borderRadius={8}
        shadow={1}
      >
        <HStack justifyContent="space-between" divider={<Divider />}>
          <Box justifyContent="space-between">
            <HStack justifyContent="space-between" space={2}>
              <MaterialIcons name="favorite" size={40} color="red" />
              <VStack space={2}>
                <HStack alignItems="center">
                  <Text fontSize="xxs" color="yellow.600">
                    Kuy Loyality
                  </Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={18}
                    color="#ca8a04"
                  />
                </HStack>
                <Text bold color="red.700" fontSize="sm">
                  Pacaran
                </Text>
              </VStack>
            </HStack>
          </Box>
          <VStack space={2} alignItems="flex-end">
            <HStack alignItems="center">
              <Text fontSize="xxs" color="yellow.600">
                Kenangan Points
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color="#ca8a04"
              />
            </HStack>
            <Text color="gray.500" fontSize="xxs">
              - pts
            </Text>
          </VStack>
        </HStack>
      </Box>
      <VStack>
        <HStack space={3} mx={2}>
          <Box py={4}>
            <MaterialIcons
              name="format-list-bulleted"
              size={24}
              color="#ca8a04"
            />
          </Box>
          <Box flex={1}>
            <Text py={4} onPress={() => navigation.navigate("Riwayat Pesanan")}>
              Semua Pesanan
            </Text>
            <Divider />
          </Box>
        </HStack>
        <HStack space={3} mx={2}>
          <Box py={4}>
            <MaterialIcons name="location-city" size={24} color="#ca8a04" />
          </Box>
          <Box flex={1}>
            <Text py={4} onPress={() => navigation.navigate("Alamat Saya")}>
              Alamat Pengiriman
            </Text>
            <Divider />
          </Box>
        </HStack>
        <HStack space={3} mx={2}>
          <Box py={4}>
            <MaterialIcons name="help-outline" size={24} color="#ca8a04" />
          </Box>
          <Box flex={1}>
            <Text py={4} onPress={() => navigation.navigate("Bantuan")}>
              Bantuan
            </Text>
            <Divider />
          </Box>
        </HStack>
        <HStack space={3} mx={2}>
          <Box py={4}>
            <MaterialIcons name="message" size={24} color="#ca8a04" />
          </Box>
          <Box flex={1}>
            <Text py={4} onPress={() => navigation.navigate("Curhat")}>
              Curhat
            </Text>
            <Divider />
          </Box>
        </HStack>
        <HStack space={3} mx={2}>
          <Box py={4}>
            <MaterialIcons name="language" size={24} color="#ca8a04" />
          </Box>
          <Box flex={1}>
            <Text py={4} onPress={() => navigation.navigate("Pilih Bahasa")}>
              Pengaturan Bahasa
            </Text>
            <Divider />
          </Box>
        </HStack>
        <HStack space={3} mx={2}>
          <Box py={4}>
            <MaterialIcons name="info-outline" size={24} color="#ca8a04" />
          </Box>
          <Box flex={1}>
            <Text
              py={4}
              onPress={() => navigation.navigate("Ketentuan Layanan")}
            >
              Ketentuan Layanan
            </Text>
            <Divider />
          </Box>
        </HStack>
        <HStack space={3} mx={2}>
          <Box py={4}>
            <FontAwesome name="coffee" size={24} color="#ca8a04" />
          </Box>
          <Box flex={1}>
            <Text
              py={4}
              onPress={() => navigation.navigate("Tentang Kopi Kuy")}
            >
              Tentang Kopi Kuy
            </Text>
            <Divider />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProfileScreen;
