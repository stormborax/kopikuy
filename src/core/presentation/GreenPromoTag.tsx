import React from "react";
import { Box } from "native-base";

const GreenPromoTag = () => {
  return (
    <Box
      bg="green.500"
      rounded="xl"
      p={1}
      _text={{
        fontSize: "xs",
        fontWeight: "bold",
        color: "white",
      }}
    >
      Promo
    </Box>
  );
};

export default GreenPromoTag;
