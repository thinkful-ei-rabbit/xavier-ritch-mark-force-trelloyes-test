import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from 'react-test-renderer';



describe("<Card />", () => {
  it("renders Card without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Card 
        title="Test Card"
        content="this is a test card"
    />, div);

    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders UI", () => {
    const tree = renderer
        .create(<Card 
            title="Test Card 2"
            content="this is another test card"
        />).toJSON();
        expect(tree).toMatchSnapshot();
  });

});


