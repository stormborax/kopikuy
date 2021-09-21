import React from "react";
import { Box } from "native-base";

const FlashSaleTag = () => {
  return (
    <Box
      bg="red.500"
      rounded="xl"
      p={1}
      _text={{
        fontSize: "xs",
        fontWeight: "bold",
        color: "white",
      }}
    >
      Flash Sale
    </Box>
  );
};

export default FlashSaleTag;
