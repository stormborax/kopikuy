import React from "react";
import { TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { Box, Heading, HStack, Divider, Text, SimpleGrid } from "native-base";

import { EpicChip } from "epic-chip-react-native";
import CountDown from "react-native-countdown-component";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PromoCard from "../../core/presentation/PromoCard";
import ProductCard from "../../core/presentation/ProductCard";

var width = Dimensions.get("window");

var layout = {
  width: width,
};

const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <ScrollView>
      <Box flex={1} safeArea bg="white">
        <Box>
          <Box px={4}>
            <HStack space="xs">
              <EpicChip
                labelOptions={{
                  label: "Cerita Roti",
                  Icon: <MaterialCommunityIcons name="bread-slice" size={15} />,
                }}
                options={{
                  labelStyles: { paddingLeft: 10 },
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
                  label: "Chigo",
                  Icon: (
                    <MaterialCommunityIcons name="food-drumstick" size={15} />
                  ),
                }}
                options={{
                  labelStyles: { paddingLeft: 10 },
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
          </Box>
          <Heading size="md" px={4} py={4} color="black">
            Promo spesial untukmu
          </Heading>
          <ScrollView horizontal={true}>
            <HStack space={3}>
              <PromoCard />
              <PromoCard />
            </HStack>
          </ScrollView>
        </Box>
        <Divider />
        <Box px={4} py={8}>
          <Heading size="md">Flash Sale</Heading>
          <HStack space={2}>
            <Heading size="sm" py={4} color="grey">
              Berakhir dalam
            </Heading>
            <Box py={2}>
              <CountDown
                showSeparator
                size={10}
                until={3600000}
                timeToShow={["H", "M", "S"]}
                timeLabels={{ h: "", m: "", s: "" }}
              />
            </Box>
            <Text
              bold
              fontSize="md"
              color="blue.500"
              py={4}
              position="absolute"
              right={0}
            >
              Lihat semua
            </Text>
          </HStack>
          <Box width="50%">
            <TouchableOpacity onPress={() => navigation.navigate("Deskripsi")}>
              <SimpleGrid columns={2} spacingY={1} spacingX={1}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </SimpleGrid>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
