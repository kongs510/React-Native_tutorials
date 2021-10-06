import React from "react";
import { Button, Text, View } from "react-native";
import Mybutton from "./Mybutton";
import Mybutton1 from "./Mybutton1";

const ComponentButton = () => {
  return (
    <>
      <Text>Button Component</Text>
      {/* <Button title="Button" onPress={() => alert("click!!!")} /> */}
      <Mybutton />
      <Mybutton1 />
    </>
  );
};
export default ComponentButton;
