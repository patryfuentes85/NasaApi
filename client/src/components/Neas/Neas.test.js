import React from "react";
import { shallow } from "enzyme";
import Neas from "./Neas";

describe("Neas", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Neas />);
    expect(wrapper).toMatchSnapshot();
  });
});
