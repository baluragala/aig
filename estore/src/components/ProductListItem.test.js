import ProductListItem from "./ProductListItem";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Link } from "react-router-dom";
import { Map } from "immutable";
import { stringify } from "query-string";
import { shallowToJson } from "enzyme-to-json";

Enzyme.configure({
  adapter: new Adapter()
});

describe("ProductListItem", () => {
  it("should render product information", () => {
    const product = Map({
      id: 1,
      title: "p1",
      price: 100,
      stock: 20
    });

    const domWrapper = shallow(<ProductListItem product={product} />);

    expect(domWrapper.find("h2").length).toEqual(1);
    expect(domWrapper.find(Link).length).toEqual(1);
    let children = domWrapper.find(Link).children();
    expect(children.contains("p1")).toBeTruthy();

    expect(domWrapper.find(Link).prop("to")).toEqual(
      `/products/${product.get("id")}?${stringify({ related: true })}`
    );
  });

  it("should handle click event", () => {
    const product = Map({
      id: 1,
      title: "p1",
      price: 100,
      stock: 20
    });

    const mockedClickHandler = jest.fn();
    const domWrapper = shallow(
      <ProductListItem product={product} onSale={mockedClickHandler} />
    );
    domWrapper
      .find("button")
      .first()
      .simulate("click");
    expect(mockedClickHandler).toHaveBeenCalledTimes(1);
    expect(mockedClickHandler).toHaveBeenCalledWith(1);
  });

  it("should pass snapshot", () => {
    const product = Map({
      id: 1,
      title: "p1",
      price: 100,
      stock: 20
    });

    const domWrapper = shallow(<ProductListItem product={product} />);
    expect(shallowToJson(domWrapper)).toMatchSnapshot();
  });
});
