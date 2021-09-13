import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/home/presentation/HomeScreen";
import CatalogueSreen from "./src/catalogue/presentation/CatalogueScreen";
import PromotionScreen from "./src/promotion/presentation/PromotionScreen";
import ProfileScreen from "./src/profile/presentation/ProfileScreen";
import EditProfileScreen from "./src/profile/presentation/EditProfileScreen";
import { NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
const MainStack = createNativeStackNavigator();
const MainBottomTab = createBottomTabNavigator();

function KopiKuyTabs() {
  return (
    <MainBottomTab.Navigator>
      <MainBottomTab.Screen name="Beranda" component={HomeScreen} />
      <MainBottomTab.Screen name="Menu" component={CatalogueSreen} />
      <MainBottomTab.Screen name="Promo" component={PromotionScreen} />
      <MainBottomTab.Screen
        name="Saya"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
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
        </MainStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
