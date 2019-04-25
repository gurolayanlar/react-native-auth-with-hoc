import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import withAuth from "./withAuth";

class ContactScreen extends Component {
  render() {
    return (
      <View>
        <Text> Contact Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const extendedComponent = withAuth(ContactScreen);

extendedComponent.navigationOptions = {
  title: "Contact"
};
export default extendedComponent;
