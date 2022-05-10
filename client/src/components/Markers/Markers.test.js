import React from "react";
import { shallow } from "enzyme";
import Markers from "./Markers";

describe("Markers", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Markers />);
    expect(wrapper).toMatchSnapshot();
  });
});
