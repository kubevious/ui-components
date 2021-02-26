import React from 'react';
import 'jest'

import { Diagram } from "../src";
import { render } from "@testing-library/react";

function renderDiagram() {
  return render(<Diagram />);
}
describe("<Diagram />", () => {
  test("Should check that the component Diagram is rendered", async () => {
    const { findByTestId } = renderDiagram();
    
    const diagram = await findByTestId("diagram");

    expect(diagram)
  });
});
