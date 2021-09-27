import React from "react";
import { Box, HStack, ScrollView } from "native-base";

import CataloguePickerButton from "./CataloguePickerButton";

const CatalogueScrollableContainer = () => {
  return (
    <Box>
      <ScrollView py={0.25} horizontal={true} bg="gray.300">
        <HStack space="2xs">
          <CataloguePickerButton />
          <CataloguePickerButton />
          <CataloguePickerButton />
          <CataloguePickerButton />
          <CataloguePickerButton />
          <CataloguePickerButton />
          <CataloguePickerButton />
        </HStack>
      </ScrollView>
    </Box>
  );
};

export default CatalogueScrollableContainer;
