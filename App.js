import React from "react";
import { Text, View } from "react-native-web";
import Slot1 from "./src/Components/slot1";
import ButtonClick from "./src/Components/ButtonClick";
import Slot2 from "./src/Components/StateProps_S2/Slot2";
// import Calculator from "./src/Components/StateProps_S2/Calculator/Calculator";
import Calculator_Teach from "./src/Components/Dev_Interface_S3/Calculator_Teacher/slot3_1";

const App = () => {
  return (
    <>
      {/* <Slot1 /> */}
      {/*<ButtonClick />
      <Slot2 /> */}
      {/* <Calculator /> */}
      <Calculator_Teach />
    </>
  );
};

export default App;
