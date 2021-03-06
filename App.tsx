import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./src/home/presentation/HomeScreen";
import ProductDescriptionScreen from "./src/product/presentation/ProductDescriptionScreen";
import ProductBundleDescriptionScreen from "./src/product/presentation/ProductBundleDescriptionScreen";
import CatalogueSreen from "./src/catalogue/presentation/CatalogueScreen";
import ProfileScreen from "./src/profile/presentation/ProfileScreen";
import EditProfileScreen from "./src/profile/presentation/EditProfileScreen";
import EditPinScreen from "./src/profile/presentation/EditPinScreen";
import MyAddressScreen from "./src/profile/presentation/MyAddressScreen";
import FaqScreen from "./src/profile/presentation/FaqScreen";
import ReportScreen from "./src/profile/presentation/ReportScreen";
import EditLanguageScreen from "./src/profile/presentation/EditLanguageScreen";
import PolicyScreen from "./src/profile/presentation/PolicyScreen";
import AboutScreen from "./src/profile/presentation/AboutScreen";
import MyVoucherScreen from "./src/promotion/presentation/MyVoucherScreen";
import VoucherPackageScreen from "./src/promotion/presentation/VoucherPackageScreen";
import MissionScreen from "./src/promotion/presentation/MissionScreen";
import PurchaseHistoryScreen from "./src/promotion/presentation/PurchaseHistoryScreen";
import OngoingOrderScreen from "./src/order/presentation/OngoingOrderScreen";
import FinishedOrderScreen from "./src/order/presentation/FinishedOrderScreen";
import { NativeBaseProvider, Pressable } from "native-base";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
const MainStack = createNativeStackNavigator();
const MainBottomTab = createBottomTabNavigator();
const PromotionTopTab = createMaterialTopTabNavigator();
const OrderTopTab = createMaterialTopTabNavigator();

function OrderTopTabs() {
  return (
    <OrderTopTab.Navigator>
      <OrderTopTab.Screen name="Sedang Jalan" component={OngoingOrderScreen}/>
      <OrderTopTab.Screen name="Selesai" component={FinishedOrderScreen}/>
    </OrderTopTab.Navigator>
  );
}

function PromotionTopTabs() {
  return (
    <PromotionTopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#C2925B",
        tabBarInactiveTintColor: "#828282",
        tabBarIndicatorStyle: {
          backgroundColor: "#C2925B",
        },
      }}
    >
      <PromotionTopTab.Screen name="Voucher Saya" component={MyVoucherScreen} />
      <PromotionTopTab.Screen
        name="Paket Voucher"
        component={VoucherPackageScreen}
      />
      <PromotionTopTab.Screen name="Mission" component={MissionScreen} />
    </PromotionTopTab.Navigator>
  );
}

function KopiKuyTabs({ navigation }) {
  return (
    <MainBottomTab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
      <MainBottomTab.Screen
        name="Beranda"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <MainBottomTab.Screen name="Menu" component={CatalogueSreen} />
      <MainBottomTab.Screen
        name="Promo"
        component={PromotionTopTabs}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="brightness-percent"
              size={size}
              color={color}
            />
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <Pressable
              mr={4}
              onPress={() => navigation.navigate("Riwayat Pembelian")}
            >
              <FontAwesome5 name="list-alt" size={24} color="black" />
            </Pressable>
          ),
        }}
      />
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
          <MainStack.Screen
            name="Deskripsi"
            component={ProductDescriptionScreen}
          />
          <MainStack.Screen
            name="Paket"
            component={ProductBundleDescriptionScreen}
          />
          <MainStack.Screen name="Edit Profile" component={EditProfileScreen} />
          <MainStack.Screen name="Ganti PIN" component={EditPinScreen} />
          <MainStack.Screen name="Alamat Saya" component={MyAddressScreen} />
          <MainStack.Screen name="Bantuan" component={FaqScreen} />
          <MainStack.Screen name="Curhat" component={ReportScreen} />
          <MainStack.Screen
            name="Pilih Bahasa"
            component={EditLanguageScreen}
          />
          <MainStack.Screen name="Ketentuan Layanan" component={PolicyScreen} />
          <MainStack.Screen name="Tentang Kopi Kuy" component={AboutScreen} />
          <MainStack.Screen
            name="Riwayat Pembelian"
            component={PurchaseHistoryScreen}
          />
          <MainStack.Screen
            name="Riwayat Pesanan"
            component={OrderTopTabs}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
