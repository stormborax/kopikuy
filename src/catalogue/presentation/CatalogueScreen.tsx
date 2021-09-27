import React from "react";
import { ScrollView } from "react-native";
import { Box, Divider, HStack, Heading } from "native-base";

import CatalogueScrollableContainer from "../../core/presentation/CatalogueScrollableContainer";
import PromoCard from "../../core/presentation/PromoCard";
const CatalogueScreen: React.FC = ({ route }) => {
  return (
    <ScrollView>
      <Box flex={1} bg="white">
        <CatalogueScrollableContainer />
        <Divider />
        <Box>
          <Heading size="md" px={4} py={2} color="black">
            Promo spesial untukmu
          </Heading>
          <ScrollView horizontal={true}>
            <HStack space={3}>
              <PromoCard />
              <PromoCard />
              <PromoCard />
              <PromoCard />
              <PromoCard />
            </HStack>
          </ScrollView>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default CatalogueScreen;
