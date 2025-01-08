import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Slot2_5() {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Please enter your name... "
        onChangeText={(enterName) => setName(enterName)}
      />
      <Text>Entered Name: {name}</Text>
    </View>
  );
}
