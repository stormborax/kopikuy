import React from "react";
import {
  Box,
  Text,
  Input,
  TextArea,
  ScrollView,
  HStack,
  Button,
  Divider,
} from "native-base";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

const ReportScreen: React.FC = ({ navigation, route }) => {
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
        <HStack p={6}>
          <Text position="absolute" left={0} mt={3} ml={2}>
            Subjek
          </Text>
          <HStack position="absolute" right={0} mt={3} mr={2}>
            <Text>Pilih Subjek</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </HStack>
        </HStack>
        <Divider />
        <HStack p={6}>
          <Text position="absolute" left={0} ml={2} mt={3}>
            Outlet
          </Text>
          <HStack position="absolute" right={0} mr={2} mt={3}>
            <Text>Pilih Outlet</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </HStack>
        </HStack>
        <Divider />

        <Text mt={2} fontSize="sm">Email</Text>
        <Input
          my={2}
          w="100%"
          variant="filled"
          value="stormborax@gmail.com"
          size="xs"
        />
        <Text mt={2} fontSize="sm">
          Pesan
        </Text>
        <TextArea
          my={2}
          w="100%"
          textAlignVertical="top"
          variant="filled"
          placeholder="Jangan Bete"
          size="xs"
        />
      </ScrollView>
      <HStack safeAreaBottom justifyContent="center" py={3} bgColor="white">
        <Button
          w="95%"
          bg="#BA2025"
          colorScheme="orange"
          _text={{ fontWeight: "bold", fontSize: "lg" }}
        >
          KIRIM
        </Button>
      </HStack>
    </Box>
  );
};

export default ReportScreen;
