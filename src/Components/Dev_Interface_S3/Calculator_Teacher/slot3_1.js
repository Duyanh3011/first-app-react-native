import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class Calculator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      resultText: "",
      calculationText: "",
    };
  }

  handlePress(item) {
    if (["=", "DEL"].includes(item)) {
      return this.operate(item);
    } else {
      this.setState({
        calculationText: this.state.calculationText + item,
      });
    }
  }

  operate(oper) {
    switch (oper) {
      case "DEL":
        let text = this.state.calculationText.split("");
        text.pop();
        this.setState({ calculationText: text.join("") });
        break;
      case "=":
        this.setState({
          resultText: eval(this.state.calculationText),
        });
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Result */}
        <View style={styles.result}>
          <Text style={styles.displayText}>{this.state.resultText}</Text>
        </View>
        {/* Calculation */}
        <View style={styles.calculation}>
          <Text style={styles.displayText}>{this.state.calculationText}</Text>
        </View>
        {/* Buttons */}
        <View style={styles.numbers}>
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
                      onPress={() => this.handlePress(item)}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

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
    flex: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "grey",
  },
  numbers: {
    flex: 3,
    backgroundColor: "#2b2b2b",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
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
