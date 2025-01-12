import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import KeyPad from "./KeyPad";
import { styles } from "./Style";

export default function Calculator() {
  const [stringValue, setStringValue] = useState("");
  return (
    <View style={{ width: "100%" }}>
      <Text>Calculator</Text>
      <View style={styles.screenCalculator}>
        <Text style={styles.buttonText}>{stringValue}</Text>
      </View>

      <KeyPad setValue={setStringValue} />
    </View>
  );
}
