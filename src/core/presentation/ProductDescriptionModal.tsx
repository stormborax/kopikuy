import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Image,
  Text,
  Button,
  Heading,
  Box,
  HStack,
  VStack,
  Tooltip,
  Divider,
  ScrollView,
  SimpleGrid,
  TextArea,
} from "native-base";

import { EpicChip } from "epic-chip-react-native";
import { Entypo } from "@expo/vector-icons";

import ToppingCard from "./ToppingCard";

const ProductDescriptionModal = () => {
  return (
    <ScrollView>
      <Box bg="white" safeArea>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1x6reDpMwrrqKM7qwFqouHJVSqfd1Xn0tcg&usqp=CAU",
          }}
          alt="image base"
          resizeMode="cover"
          height={250}
          roundedTop="md"
        />
        <Box
          bg="red.700"
          px={2}
          py={2}
          style={{ position: "absolute", top: 10 }}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Flash Sale
        </Box>
        <HStack mx={2} space="2xl">
          <Tooltip label="Add Boba" openDelay={200}>
            <Button size="xs" bottom={3} _text={{ fontWeight: "bold" }}>
              2 Toppings
            </Button>
          </Tooltip>
          <Box
            bg="yellow.500"
            rounded="xl"
            p={2}
            bottom={3}
            _text={{
              fontSize: "xs",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Favorite
          </Box>
        </HStack>
        <Divider />
        <Box>
          <HStack>
            <Heading px={2} color="black.300" size="md">
              Kopi Kenangan Mantan
            </Heading>
            <Heading px={5} py={1} color="red.600" size="sm">
              Rp. 18.000,00
            </Heading>
          </HStack>
          <Text px={2} py={2}>
            Kopi, Susu, Gula Aren
          </Text>
        </Box>
        <Divider />
        <Box py={3}>
          <VStack space="sm">
            <HStack space="sm">
              <Text px={2} py={2} paddingRight={6}>
                Suhu
              </Text>
              <EpicChip
                labelOptions={{
                  label: "Hot",
                }}
                options={{
                  backgroundColor: { focusColor: "#FF2B18" },
                  labelColor: {
                    focusColor: "#FFFFFF",
                    inActiveColor: "#000000",
                  },
                }}
                mode="Solid"
                checkIcon={false}
              />
              <EpicChip
                labelOptions={{
                  label: "Cold",
                }}
                options={{
                  backgroundColor: { focusColor: "#FF2B18" },
                  labelColor: {
                    focusColor: "#FFFFFF",
                    inActiveColor: "#000000",
                  },
                }}
                mode="Solid"
                checkIcon={false}
              />
            </HStack>
            <HStack space="sm">
              <Text px={2} py={2}>
                Ukuran
              </Text>
              <EpicChip
                labelOptions={{
                  label: "Medium",
                }}
                options={{
                  backgroundColor: { focusColor: "#FF2B18" },
                  labelColor: {
                    focusColor: "#FFFFFF",
                    inActiveColor: "#000000",
                  },
                }}
                mode="Solid"
                checkIcon={false}
              />
              <EpicChip
                labelOptions={{
                  label: "Large",
                }}
                options={{
                  backgroundColor: { focusColor: "#FF2B18" },
                  labelColor: {
                    focusColor: "#FFFFFF",
                    inActiveColor: "#000000",
                  },
                }}
                mode="Solid"
                checkIcon={false}
              />
            </HStack>
            <HStack space="sm">
              <Text px={2} py={2} paddingRight={6}>
                Gula
              </Text>
              <EpicChip
                labelOptions={{
                  label: "Normal",
                }}
                options={{
                  backgroundColor: { focusColor: "#FF2B18" },
                  labelColor: {
                    focusColor: "#FFFFFF",
                    inActiveColor: "#000000",
                  },
                }}
                mode="Solid"
                checkIcon={false}
              />
              <EpicChip
                labelOptions={{
                  label: "Less",
                }}
                options={{
                  backgroundColor: { focusColor: "#FF2B18" },
                  labelColor: {
                    focusColor: "#FFFFFF",
                    inActiveColor: "#000000",
                  },
                }}
                mode="Solid"
                checkIcon={false}
              />
              <EpicChip
                labelOptions={{
                  label: "No Sugar",
                }}
                options={{
                  backgroundColor: { focusColor: "#FF2B18" },
                  labelColor: {
                    focusColor: "#FFFFFF",
                    inActiveColor: "#000000",
                  },
                }}
                mode="Solid"
                checkIcon={false}
              />
            </HStack>
            <HStack space="sm">
              <Text px={2} py={2} paddingRight={9}>
                Es
              </Text>
              <EpicChip
                labelOptions={{
                  label: "Normal",
                }}
                options={{
                  backgroundColor: { focusColor: "#FF2B18" },
                  labelColor: {
                    focusColor: "#FFFFFF",
                    inActiveColor: "#000000",
                  },
                }}
                mode="Solid"
                checkIcon={false}
              />
              <EpicChip
                labelOptions={{
                  label: "Less",
                }}
                options={{
                  backgroundColor: { focusColor: "#FF2B18" },
                  labelColor: {
                    focusColor: "#FFFFFF",
                    inActiveColor: "#000000",
                  },
                }}
                mode="Solid"
                checkIcon={false}
              />
              <EpicChip
                labelOptions={{
                  label: "No Ice",
                }}
                options={{
                  backgroundColor: { focusColor: "#FF2B18" },
                  labelColor: {
                    focusColor: "#FFFFFF",
                    inActiveColor: "#000000",
                  },
                }}
                mode="Solid"
                checkIcon={false}
              />
            </HStack>
          </VStack>
        </Box>
        <Divider />
        <HStack>
          <Heading size="sm" px={2} py={2}>
            Ekstra Topping
          </Heading>
          <HStack position="absolute" right={0} p={3}>
            <Entypo name="thumbs-up" color="yellow" size={15} />
            <Text fontSize="xs" fontWeight="bold" px={2}>
              Favorite
            </Text>
          </HStack>
        </HStack>
        <Box width="33.3%">
          <TouchableOpacity>
            <SimpleGrid columns={3} spacingX={1} spacingY={1}>
              <ToppingCard />
              <ToppingCard />
              <ToppingCard />
              <ToppingCard />
            </SimpleGrid>
          </TouchableOpacity>
        </Box>
        <Divider />
        <HStack>
          <Heading size="sm" px={2} py={3}>
            Catatan Tambahan
          </Heading>
          <Heading
            style={{ position: "absolute", right: 0 }}
            p={2.5}
            size="xs"
            color="#52525b"
          >
            0/30
          </Heading>
        </HStack>
        <TextArea p={2} bg="#e7e5e4" placeholder="Ga perlu baper" />
        <Divider />
        <Button
          bg="red.600"
          m={2}
          _text={{ fontWeight: "bold", color: "white" }}
        >
          Simpan Konfigurasi
        </Button>
      </Box>
    </ScrollView>
  );
};

export default ProductDescriptionModal;
