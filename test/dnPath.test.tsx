import React from 'react';
import 'jest'

import { DnPath } from "../src";
import { render } from "@testing-library/react";

function renderDnPath() {
  return render(<DnPath dn={[]} />);
}

describe("<DnPath />", () => {
  test("Should check that the component DnPath is rendered", async () => {
    const { findByTestId } = renderDnPath();
    
    const dnPath = await findByTestId("dn-path");
    expect(dnPath)
  });
});
