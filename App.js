import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ComponentButton from "./components/ComponentButton";
import Button from "./components/ComponentButton";
import Name from "./components/Name";
import Name1 from "./components/Name1";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Name /> */}
      {/* <Name1 /> */}
      <ComponentButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
