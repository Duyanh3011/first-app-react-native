import react, { useState } from "react";
import { View, Text, Button } from "react-native";

const ButtonClick = () => {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Version function</Text>
      <Button
        onPress={onClickCount}
        title={`Vừa click lần ${count}`}
      />
    </View>
  );
};

export default ButtonClick;
