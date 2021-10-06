import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Name = () => {
  const name = "min cheol";
  return (
    <>
      <Text>hello world {name === "min cheol" ? "min cheol" : "react"}</Text>
      <Text>
        {(() => {
          if (name === "hanbit") return "my name is hanbit";
          else if (name === "han") return "my name is han";
          else return "my name is React Native";
        })()}
      </Text>
    </>
  );
};

export default Name;
