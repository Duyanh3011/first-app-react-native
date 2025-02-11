import React from "react";
import { FlatList } from "react-native";
import ProductSl6 from "./ProductSl6";

export default class ListProductSl6 extends React.Component {
  constructor() {
    super();
    this.state = {
      prd: null,
    };
    this.handlePressDetail = this.handlePressDetail.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.renderItemFlatList = this.renderItemFlatList.bind(this);
  }

  renderItemFlatList({ item }) {
    //render 1 element
    return (
      <ProductSl6
        dataProd={item}
        handlePress={this.handlePressDetail}
      />
    );
  }

  handlePressDetail() {
    //ham click vao item
    this.props.navigation.navigate("Detail", { data: this.prd });
  }

  async getProducts() {
    const url = "https://hungnttg.github.io/shopgiay.json";
    const res = await fetch(url, { method: "GET" });
    const resJson = await res.json(); //convert to json
    this.setState({ prd: resJson.products });
  }

  componentDidMount() {
    //ham tu dong goi khi render
    this.getProducts();
  }
  render() {
    return (
      <FlatList
        data={this.state.prd}
        numColumns={3}
        renderItem={this.renderItemFlatList}
        removeClippedSubviews
      />
    );
  }
}
