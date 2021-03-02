import React from 'react';
import 'jest'

import { DnComponent } from "../src";
import { render } from "@testing-library/react";

function renderDn() {
  return render(<DnComponent dn={''} />);
}

describe("<DnComponent />", () => {
  test("Should check that the component DnComponent is rendered", async () => {
    const { findByTestId } = renderDn();
    
    const dn = await findByTestId("dn");
    expect(dn)
  });
});
