import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Slot23 from "./Slot2_3";

const SuDungProps = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={120}
    />
  );
};

const suDungState = () => {
  const [giaTri, setGiaTri] = useState("");
  return (
    <View>
      <SuDungProps
        onChangeText={(text) => setGiaTri(text)}
        value={giaTri}
      />
      <Text>Gia tri vua truyen: {giaTri}</Text>
      <Slot23 text={giaTri} />
    </View>
  );
};

export default suDungState;
