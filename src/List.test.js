import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import renderer from 'react-test-renderer';

describe("<List />", () => {
    it("renders List without crashing", () => {
      const div = document.createElement("div");
  
      ReactDOM.render(<List
                      header="header text"
                      cards={[
                        {id: 'a', title: 'test title', content: 'test content',},
                        {id: 'b', title: 'test title', content: 'test content',}
                      ]}
                      />, div);
  
      // clean up code
      ReactDOM.unmountComponentAtNode(div);
    });
    it("renders UI", () => {
      const tree = renderer
          .create(<List 
            header="header text"
            cards={[
              {id: 'a', title: 'test title', content: 'test content',},
              {id: 'b', title: 'test title', content: 'test content',}
            ]}/>).toJSON();
          expect(tree).toMatchSnapshot();
    });
  });