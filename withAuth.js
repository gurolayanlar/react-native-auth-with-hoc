import React, { Component } from "react";
import { Text, View } from "react-native";

const withAuth = WrappedComponent => {
  class AuthenticationScreen extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isAuthenticated: false
      };

      props.navigation.addListener("willFocus", async () => {
        await this.checkAuth();
      });
    }

    remoteReuqest = async () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      });
    };

    checkAuth = async () => {
      const result = await this.remoteReuqest();
      if (result) {
        this.setState({
          isAuthenticated: true
        });
      } else {
        this.props.navigation.navigate("Login");
      }
    };

    render() {
      if (!this.state.isAuthenticated) {
        return <Text>Waiting...</Text>;
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  return AuthenticationScreen;
};

export default withAuth;
