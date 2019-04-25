import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View>
        <Text> Home Screen </Text>
        <Button
          title="Go to Contacts"
          onPress={() => this.props.navigation.navigate("Contact")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
