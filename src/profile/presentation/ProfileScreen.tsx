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

const ProfileScreen: React.FC = ({navigation}) => {
  
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
      <HStack space={2} mx={2}>
        <VStack>
          <Box py={4}>
            <MaterialIcons
              name="format-list-bulleted"
              size={24}
              color="#ca8a04"
            />
          </Box>
          <Box py={4}>
            <MaterialIcons name="location-city" size={24} color="#ca8a04" />
          </Box>
          <Box py={4}>
            <MaterialIcons name="help-outline" size={24} color="#ca8a04" />
          </Box>
          <Box py={4}>
            <MaterialIcons name="message" size={24} color="#ca8a04" />
          </Box>
          <Box py={4}>
            <MaterialIcons name="language" size={24} color="#ca8a04" />
          </Box>
          <Box py={4}>
            <MaterialIcons name="info-outline" size={24} color="#ca8a04" />
          </Box>
          <Box py={4}>
            <FontAwesome name="coffee" size={24} color="#ca8a04" />
          </Box>
        </VStack>
        <VStack divider={<Divider />} flex={1}>
          <Text my={4}>Semua Pesanan</Text>
          <Text my={4}>Alamat Pengiriman</Text>
          <Text my={4}>Bantuan</Text>
          <Text my={4}>Curhat</Text>
          <Text my={4}>Pengaturan Bahasa</Text>
          <Text my={4}>Ketentuan Layanan</Text>
          <Text my={4}>Tentang Kopi Kuy</Text>
          <Divider width={1} />
        </VStack>
      </HStack>
    </Box>
  );
};

export default ProfileScreen;
