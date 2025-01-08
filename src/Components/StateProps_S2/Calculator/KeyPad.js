import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Style";

export default function KeyPad(props) {
  const { setValue: setValueScreen } = props;

  const handleKeyClick = (params) => {
    setValueScreen((prev) => prev + params);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleKeyClick(1)}
      >
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleKeyClick(2)}
      >
        <Text>2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleKeyClick(3)}
      >
        <Text>3</Text>
      </TouchableOpacity>
    </View>
  );
}
