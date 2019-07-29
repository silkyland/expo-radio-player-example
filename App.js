import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import config from "./config";

export default class App extends Component {
  async componentDidMount() {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({
        uri: config.radioUrl
      });
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
