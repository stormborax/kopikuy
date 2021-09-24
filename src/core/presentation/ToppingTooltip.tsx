import React from "react";
import { Box, Tooltip, Button } from "native-base";

const ToppingTooltip = () => {
  return (
    <Box>
      <Tooltip label="Add Boba" openDelay={200}>
        <Button size="xs" _text={{ fontWeight: "bold" }}>
          2 Toppings
        </Button>
      </Tooltip>
    </Box>
  );
};

export default ToppingTooltip;
