import React from 'react';
import 'jest'

import { GoldenLayout, GoldenLayoutLocation } from "../src";
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

  test("case-02", async () => {
    const windows = [
      {
        id: "Main",
        component: (<div>Main Content</div>),
        location: GoldenLayoutLocation.main,
        title: "Main",
        skipClose: true,
      },
      {
        id: "Properties",
        component: (<div>Props Content</div>),
        location: GoldenLayoutLocation.right,
        title: "Properties",
        width: 25,
        allowVerticalScroll: true,
      },
      {
        id: "Alerts",
        component: (<div>Alerts Content</div>),
        location: GoldenLayoutLocation.bottom,
        title: "Alerts",
        allowVerticalScroll: true,
      },
    ]
    const { findByTestId } = render(
      <GoldenLayout windows={windows} />
    );
    
    const goldenLayout = await findByTestId("golden-layout");

    expect(goldenLayout)
  });

});
