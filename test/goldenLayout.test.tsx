import React from 'react';
import 'jest'

import { GoldenLayout } from "../src";
import { render } from "@testing-library/react";

function renderGoldenLayout() {

  return render(<GoldenLayout />);
}

describe("<GoldenLayout />", () => {
  test("Should check that the component GoldenLayout is rendered", async () => {
    const { findByTestId } = renderGoldenLayout();
    
    const goldenLayout = await findByTestId("golden-layout");

    expect(goldenLayout)
  });
});
