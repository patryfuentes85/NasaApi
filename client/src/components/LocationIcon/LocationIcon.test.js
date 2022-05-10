import React from "react";
import { shallow } from "enzyme";
import LocationIcon from "./LocationIcon";

describe("LocationIcon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LocationIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
