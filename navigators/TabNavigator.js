import { Image, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  Featherm,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen
        name="Application"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Reels"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-collection" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="shopping"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/profile.jpeg")}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
          ),
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
