import React from "react";
import { TouchableOpacity, Dimensions, ScrollView } from "react-native";
import {
  Box,
  Heading,
  HStack,
  VStack,
  Divider,
  Text,
  Button,
  SimpleGrid,
} from "native-base";

import Carousel from "react-native-snap-carousel";
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
          <HStack>
            <Button
              mx={3}
              my={3}
              size="sm"
              variant="outline"
              colorScheme="black"
              startIcon={
                <MaterialCommunityIcons name="bread-slice-outline" size={20} />
              }
            >
              Cerita Roti
            </Button>
            <Button
              mx={3}
              my={3}
              size="sm"
              variant="outline"
              colorScheme="black"
              startIcon={
                <MaterialCommunityIcons
                  name="food-drumstick-outline"
                  size={20}
                />
              }
            >
              Chigo
            </Button>
          </HStack>
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
            <SimpleGrid columns={2} spacingY={1} spacingX={1}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
