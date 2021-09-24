import React from "react";
import { Box } from "native-base";

const RedPromoTag = () => {
  return (
    <Box
      bg="red.700"
      px={2}
      py={2}
      style={{ position: "absolute", top: 0 }}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
      }}
    >
      Promo
    </Box>
  );
};

export default RedPromoTag;
