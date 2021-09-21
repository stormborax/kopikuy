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
  Divider,
  ScrollView,
  SimpleGrid,
  TextArea,
} from "native-base";

import NumericInput from "react-native-numeric-input";
import { EpicChip } from "epic-chip-react-native";
import { Entypo } from "@expo/vector-icons";

import ToppingCard from "../../core/presentation/ToppingCard";
import MerchandiseColorSelect from "../../core/presentation/MerchandiseColorSelect";
import ToppingTooltip from "../../core/presentation/ToppingTooltip";
import FavoriteTag from "../../core/presentation/FavoriteTag";
import FlashSaleCountdown from "../../core/presentation/FlashSaleCountdown";

const ProductDescriptionScreen = () => {
  return (
    <ScrollView>
      <Box bg="white">
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1x6reDpMwrrqKM7qwFqouHJVSqfd1Xn0tcg&usqp=CAU",
          }}
          alt="image base"
          resizeMode="cover"
          height={250}
          roundedTop="md"
        />
        <HStack m={3} space="2xl">
          <Box style={{ position: "absolute", zIndex: 1 }}>
            <ToppingTooltip />
          </Box>
          <Box style={{ position: "absolute", zIndex: 1, left: 100 }}>
            <FavoriteTag />
          </Box>
        </HStack>
        <Divider />
        <Box my={3}>
          <HStack>
            <Heading px={2} size="md">
              Kopi Kenangan Mantan
            </Heading>
            <Heading position="absolute" right={5} color="red.600" size="md">
              Rp. 18.000
            </Heading>
          </HStack>
          <Text px={2} py={2}>
            Kopi, Susu, Gula Aren
          </Text>
        </Box>
        <Divider />
        <FlashSaleCountdown />
        <Divider />
        <MerchandiseColorSelect />
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
        <Box>
          <HStack>
            <Box p={2} width="40%">
              <NumericInput iconSize={25} />
            </Box>
            <Box width="60%">
              <Button
                bg="red.600"
                m={2}
                _text={{ fontWeight: "bold", color: "white" }}
              >
                Keranjang Rp. 18.000
              </Button>
            </Box>
          </HStack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default ProductDescriptionScreen;
