import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default Calculator = () => {
  const [resultText, setResultText] = useState("");
  const [calculationText, setCalculationText] = useState("");

  const handlePress = (item) => {
    if (["=", "DEL"].includes(item)) {
      return operate(item);
    } else {
      setCalculationText((prev) => prev + item);
    }
  };

  const operate = (oper) => {
    switch (oper) {
      case "DEL":
        let text = calculationText.split("");
        text.pop();
        setResultText(text.join(""));
        break;
      case "=":
        setResultText(calculationText);
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Result */}
      <View style={styles.result}>
        <Text style={styles.displayText}>{resultText}</Text>
      </View>
      {/* Calculation */}
      <View style={styles.calculation}>
        <Text style={styles.displayText}>{calculationText}</Text>
      </View>
      {/* Buttons */}
      <View style={styles.buttons}>
        {/* Number 1 */}
        {[
          ["1", "4", "7", "DEL"],
          ["2", "5", "8", "0"],
          ["3", "6", "9", "="],
          ["+", "-", "*", "/"],
        ].map((arr) => (
          <View style={styles.numberCol}>
            {arr.map((item) => {
              return (
                <TouchableOpacity
                  style={styles.btn}
                  key={item}
                  onPress={() => handlePress(item)}
                >
                  <Text style={styles.displayText}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "full",
  },
  result: {
    flex: 1,
    justifyContent: "space-around ",
    alignItems: "flex-end",
    backgroundColor: "green",
    borderWidth: 1,
    borderRadius: 10,
  },
  calculation: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "yellow",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#2b2b2b",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  // numbers: {
  //   backgroundColor: "grey",
  //   flex: 3,
  //   flexDirection: "row",
  //   justifyContent: "flex-end",
  //   alignItems: "stretch",
  // },
  numberCol: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#c3c3c3",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  displayText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
