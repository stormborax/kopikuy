import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import {
  Box,
  Heading,
  HStack,
  Divider,
  Text,
  SimpleGrid,
  Image,
} from "native-base";

import { EpicChip } from "epic-chip-react-native";
import CountDown from "react-native-countdown-component";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swiper from "react-native-swiper/src";

import PromoCard from "../../core/presentation/PromoCard";
import ProductCard from "../../core/presentation/ProductCard";
import ReorderCard from "../../core/presentation/ReorderCard";

const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <ScrollView>
      <Box flex={1} safeArea bg="white">
        <Box>
          <Swiper
            height={200}
            paginationStyle={{ position: "absolute", bottom: 10, left: -300 }}
            dotColor="gray"
            activeDotColor="white"
          >
            <Box justifyContent="center" alignItems="center">
              <Image
                source={{
                  uri: "https://www.tagar.id/Asset/uploads2019/1589366937731-kopi-kenangan.jpg",
                }}
                alt="image base"
                resizeMode="cover"
                height="100%"
                width="100%"
                roundedTop="md"
              />
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Image
                source={{
                  uri: "https://awsimages.detik.net.id/community/media/visual/2019/10/01/d65943e9-2514-4f61-9c4c-21bd77dd42e0_169.jpeg?w=700&q=90",
                }}
                alt="image base"
                resizeMode="cover"
                height="100%"
                width="100%"
                roundedTop="md"
              />
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Image
                source={{
                  uri: "https://cdns.klimg.com/merdeka.com/i/w/news/2019/12/24/1135814/750x375/kopi-kenangan-raih-suntikan-modal-dari-jay-z-hingga-serena-williams.jpg",
                }}
                alt="image base"
                resizeMode="cover"
                height="100%"
                width="100%"
                roundedTop="md"
              />
            </Box>
          </Swiper>
        </Box>
        <Divider my={3} />
        <Box>
          <Box px={4}>
            {/*chip*/}
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
          <Divider my={3} />
          <Box>
            {/*reorder*/}
            <HStack>
              <Heading size="md" paddingLeft={4} py={2} color="black">
                Order Lagi
              </Heading>
              <MaterialCommunityIcons
                name="star"
                color="yellow"
                size={20}
                style={{ paddingTop: 12, paddingLeft: 3 }}
              />
            </HStack>
            <ScrollView horizontal={true}>
              <HStack space={3}>
                <ReorderCard />
                <ReorderCard />
              </HStack>
            </ScrollView>
          </Box>
          <Box>
            {/*promo*/}
            <Heading size="md" px={4} py={2} color="black">
              Promo spesial untukmu
            </Heading>
            <ScrollView horizontal={true}>
              <HStack space={3}>
                <PromoCard />
                <PromoCard />
              </HStack>
            </ScrollView>
          </Box>
        </Box>
        <Divider />
        <Box px={4} py={8}>
          <Heading size="md" color="black">
            Flash Sale
          </Heading>
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
