import React from "react";
import { Pressable, Text } from "react-native";

const Mybutton1 = (props) => {
  return (
    <>
      <Pressable
        style={{
          backgroundColor: "#3498db",
          padding: 16,
          margin: 10,
          borderRadius: 8,
        }}
      >
        <Text>{props.title}</Text>
        {console.log(props)}
      </Pressable>
    </>
  );
};

Mybutton1.defaultProps = {
  title: "버튼",
};

export default Mybutton1;
