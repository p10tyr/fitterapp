import React from "react";
import Home2 from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const list = { map: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<Home2 navigation={navigation} list={list} />).toJSON();
	expect(tree).toMatchSnapshot();
});
