import React from "react";
import { Text, View } from "react-native-web";
import Slot1 from "./src/Components/slot1";
import ButtonClick from "./src/Components/ButtonClick";
import Slot2 from "./src/Components/StateProps_S2/Slot2";
import Calculator from "./src/Components/StateProps_S2/Calculator/Calculator";

const App = () => {
  return (
    <View>
      <Slot1 />
      {/*<ButtonClick />
      <Slot2 /> */}
      <Calculator />
    </View>
  );
};

export default App;
