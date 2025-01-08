import React from "react";
import { Text, View } from "react-native";

export default class Slot21 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Click me",
      dem: 0,
    };
  }

  updateText() {
    this.setState((pre) => {
      return {
        dem: Number(pre.dem) + 1,
        text: "Ban click lan",
      };
    });
  }
  render() {
    return (
      <View>
        <Text onPress={() => this.updateText()}>
          {this.state.text}: {this.state.dem}
        </Text>
      </View>
    );
  }
}
