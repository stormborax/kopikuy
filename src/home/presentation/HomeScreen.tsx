import React from "react";
import { Dimensions, View } from "react-native";
import {
  Box,
  Heading,
  HStack,
  VStack,
  Divider,
  Text,
  Button,
  ScrollView,
  SimpleGrid,
} from "native-base";

import Carousel from "react-native-snap-carousel";
import Countdown from "react-native-countdown-component";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PromoCard from "../../core/presentation/PromoCard";
import ProductCard from "../../core/presentation/ProductCard";

var width = Dimensions.get("window");

const HomeScreen: React.FC = ({ route }) => {
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
          <HStack space={3}>
            <PromoCard />
            <PromoCard />
          </HStack>
        </Box>
        <Divider />
        <Box px={4} py={8}>
          <Heading size="md">Flash Sale</Heading>
          <HStack space={2}>
            <Heading size="sm" py={4} color="grey">
              Berakhir dalam
            </Heading>
            <Box py={2}>
              <Countdown
                showSeparator
                size={10}
                until={3600000}
                timeToShow={["H", "M", "S"]}
                timeLabels={{ h: null, m: null, s: null }}
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
            <VStack>
              <HStack justifyContent="space-between">
                <ProductCard />
                <ProductCard />
              </HStack>
              <HStack justifyContent="space-between">
                <ProductCard />
                <ProductCard />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
