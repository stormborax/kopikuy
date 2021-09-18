import React from "react";
import { ScrollView } from "react-native";
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Heading,
  Button,
  Divider,
} from "native-base";

import NumericInput from "react-native-numeric-input";

import BundleItemCard from "../../core/presentation/BundleItemCard";

const ProductBundleDescriptionScreen = ({ navigation }) => {
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
        <Divider />
        <Box
          width="18%"
          bg="yellow.500"
          rounded="xl"
          p={2}
          bottom={3}
          left={3}
          _text={{
            fontSize: "xs",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Favorite
        </Box>
        <Box>
          <HStack>
            <Heading px={2} size="md">
              PEKA 2
            </Heading>
            <Heading
              px={5}
              py={1}
              color="red.600"
              size="sm"
              style={{ position: "absolute", right: 0 }}
            >
              Rp. 76.000,00
            </Heading>
          </HStack>
          <Text px={2} py={2}>
            2 Thai Tea dan 2 Es Kopi Kenangan Mantan
          </Text>
        </Box>
        <Divider />
        <Box py={3}>
          <VStack space="sm">
            <BundleItemCard navigation={navigation} />
            <BundleItemCard navigation={navigation} />
            <BundleItemCard navigation={navigation} />
            <BundleItemCard navigation={navigation} />
            <BundleItemCard navigation={navigation} />
          </VStack>
        </Box>
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

export default ProductBundleDescriptionScreen;
