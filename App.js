import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import LoginScreen from "./LoginScreen";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Contact: ContactScreen,
  Login: LoginScreen
},{
  initialRouteName: "Home"
});

export default createAppContainer(AppNavigator);
