import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./src/home/presentation/HomeScreen";
import CatalogueSreen from "./src/catalogue/presentation/CatalogueScreen";
import PromotionScreen from "./src/promotion/presentation/PromotionScreen";
import ProfileScreen from "./src/profile/presentation/ProfileScreen";
import EditProfileScreen from "./src/profile/presentation/EditProfileScreen";
import EditPinScreen from "./src/profile/presentation/EditPinScreen";
import MyAddressScreen from "./src/profile/presentation/MyAddressScreen";
import { NativeBaseProvider } from "native-base";
const MainStack = createNativeStackNavigator();
const MainBottomTab = createBottomTabNavigator();
const PromotionTopTab = createMaterialTopTabNavigator();

function PromotionTopTabs() {
  return <PromotionTopTab.Navigator></PromotionTopTab.Navigator>;
}

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
          <MainStack.Screen name="Edit Profile" component={EditProfileScreen} />
          <MainStack.Screen name="Ganti PIN" component={EditPinScreen} />
          <MainStack.Screen name="Alamat Saya" component={MyAddressScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
