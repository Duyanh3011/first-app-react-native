import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import KeyPad from "./KeyPad";
import { styles } from "./Style";

export default function Calculator() {
  const [stringValue, setStringValue] = useState("");
  return (
    <View>
      <Text>Calculator</Text>
      <Text style={styles.screenCalculator}>{stringValue}</Text>
      <KeyPad setValue={setStringValue} />
    </View>
  );
}
