import React from 'react';
import 'jest'

import { Dn } from "../src";
import { render } from "@testing-library/react";

function renderDn() {
  return render(<Dn dn={''} />);
}

describe("<Dn />", () => {
  test("Should check that the component Dn is rendered", async () => {
    const { findByTestId } = renderDn();
    
    const dn = await findByTestId("dn");
    expect(dn)
  });
});
