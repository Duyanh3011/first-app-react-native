import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";

export default class ProductSl6 extends React.Component {
  constructor() {
    super();
    this.props = {
      dataProd: {},
      handlePress: null,
    };
  }

  functHanlePress() {
    this.props.handlePress ? this.props.handlePress(this.props.dataProd) : null;
  }
  render() {
    console.log(this.props.dataProd);

    return (
      <TouchableWithoutFeedback onPress={this.functHanlePress}>
        <View>
          <Image
            source={{ uri: this.props.dataProd.search_image }}
            style={styles.image}
          />
          <Text>{this.props.dataProd.styleid}</Text>
          <Text>{this.props.dataProd.brands_filter_facet}</Text>
          <Text>{this.props.dataProd.price}</Text>
          <Text>{this.props.dataProd.product_additional_info}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 1,
  },
});
