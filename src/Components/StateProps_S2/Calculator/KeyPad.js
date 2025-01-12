import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Style";

export default function KeyPad(props) {
  const { setValue: setValueScreen } = props;

  const handleKeyClick = (params) => {
    setValueScreen((prev) => {
      if (prev === "Error") return params;
      return prev + params;
    });
  };

  const handleCal = () => {
    setValueScreen((prev) => {
      const res = prev.replace("x", "*");
      try {
        return Math.round(eval(res));
      } catch {
        return "Error";
      }
    });
  };
  const handleClear = () => {
    setValueScreen("");
  };

  return (
    <View style={styles.keyPad}>
      {[
        "1",
        "2",
        "3",
        "+",
        "4",
        "5",
        "6",
        "-",
        "7",
        "8",
        "9",
        "x",
        "=",
        "0",
        "AC",
        "/",
      ].map((element) => {
        if (element === "=") {
          return (
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: "green",
              }}
              onPress={() => handleCal()}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                {element}
              </Text>
            </TouchableOpacity>
          );
        }
        if (element === "AC") {
          return (
            <TouchableOpacity
              style={{
                ...styles.button,

                backgroundColor: "red",
              }}
              onPress={() => handleClear()}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>AC</Text>
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleKeyClick(element)}
          >
            <Text style={styles.buttonText}>{element}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
