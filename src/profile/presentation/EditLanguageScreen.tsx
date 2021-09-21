import React from "react";
import { Box, Divider, FlatList, HStack, Pressable, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const EditLanguageScreen: React.FC = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
    });
  });
  const data = [
    {
      id: "1",
      language: "Bahasa Indonesia",
      isCheck: true,
    },
    {
      id: "2",
      language: "English",
      isCheck: false,
    },
  ];
  return (
    <Box flex={1} bg="white">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box flex={1}>
            <Pressable>
              {() => {
                if (item.isCheck) {
                  return (
                    <HStack py={4} px={3} w="100%">
                      <Text w="92%" fontSize="lg" color="#ca8a04">
                        {item.language}
                      </Text>
                      <MaterialIcons
                        w="8%"
                        name="check"
                        size={24}
                        color="#ca8a04"
                      />
                    </HStack>
                  );
                } else {
                  return (
                    <HStack py={4} px={3} w="100%">
                      <Text w="92%" fontSize="lg" color="black">
                        {item.language}
                      </Text>
                    </HStack>
                  );
                }
              }}
            </Pressable>
            <Divider />
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default EditLanguageScreen;
