import React from "react";
import { Box } from "native-base";

const FavoriteTag = () => {
  return (
    <Box
      bg="yellow.500"
      rounded="xl"
      p={1}
      _text={{
        fontSize: "xs",
        fontWeight: "bold",
        color: "white",
      }}
    >
      Favorite
    </Box>
  );
};

export default FavoriteTag;
