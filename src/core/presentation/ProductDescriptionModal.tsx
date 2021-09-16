import React from "react";
import {
  Image,
  Text,
  Button,
  Heading,
  Box,
  HStack,
  VStack,
  Modal,
} from "native-base";

import CountDown from "react-native-countdown-component";
import NumericInput from "react-native-numeric-input";
import { EpicChip } from "epic-chip-react-native";

const ProductDescriptionModal = () => {
  return (
    <Box>
      <Image
        source={{
          uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png",
        }}
        alt="image base"
        resizeMode="cover"
        height={200}
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
    </Box>
  );
};

export default ProductDescriptionModal;
