import React from "react";
import { Pressable, Text } from "react-native";
import Logbutton from "./Logbutton";

const Mybutton = () => {
  return (
    <>
      <Pressable
        style={{
          backgroundColor: "#3498db",
          padding: 16,
          margin: 10,
          borderRadius: 8,
        }}
        onPress={() => alert("click!!")}
      >
        <Text style={{ fontSize: 24 }}>my button</Text>
        <Logbutton title="button" />
      </Pressable>
    </>
  );

  Mybutton.defaultProps = {
    title: "버튼",
  };
};

export default Mybutton;
