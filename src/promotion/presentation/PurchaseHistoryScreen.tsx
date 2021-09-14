import React from "react";
import { Box, Text, Center, Button, Divider } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

const PurchaseHistoryScreen: React.FC = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        headerTitleAlign: "center",
      },
    });
  });
  return (
    <Box p={4} flex={1} bgColor="white" alignItems="center">
      <Box my={16}>
        <FontAwesome5 name="list-alt" size={40} color="grey" />
      </Box>
      <Divider mb={16} />
      <Text fontSize="lg" color="grey" bold>
        Tidak Ada Riwayat Pembelian
      </Text>
      <Button mt={4} variant="outline" colorScheme="red" alignSelf="center">
        Beli Voucher
      </Button>
      <Divider mt={16} />
    </Box>
  );
};

export default PurchaseHistoryScreen;
