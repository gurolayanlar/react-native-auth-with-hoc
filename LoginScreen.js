import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login"
  };
  render() {
    return (
      <View>
        <Text> Login Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
