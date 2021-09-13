import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";

import HomeScreen from "./src/home/presentation/HomeScreen";
import CatalogueSreen from "./src/catalogue/presentation/CatalogueScreen";
import PromotionScreen from "./src/promotion/presentation/PromotionScreen";
import ProfileScreen from "./src/profile/presentation/ProfileScreen";

const MainStack = createNativeStackNavigator();
const MainBottomTab = createBottomTabNavigator();

function KopiKuyTabs() {
  return (
    <MainBottomTab.Navigator>
      <MainBottomTab.Screen name="Beranda" component={HomeScreen} />
      <MainBottomTab.Screen name="Menu" component={CatalogueSreen} />
      <MainBottomTab.Screen name="Promo" component={PromotionScreen} />
      <MainBottomTab.Screen name="Saya" component={ProfileScreen} />
    </MainBottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name="KopiKuy"
            component={KopiKuyTabs}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
