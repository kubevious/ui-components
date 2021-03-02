import React from 'react';
import 'jest'

import { DnShortcutComponent } from "../src";
import { render } from "@testing-library/react";

function renderDn() {
  return render(<DnShortcutComponent dn={''} />);
}

describe("<DnShortcutComponent />", () => {
  test("Should check that the component DnShortcutComponent is rendered", async () => {
    const { findByTestId } = renderDn();
    
    const dn = await findByTestId("dn-shortcut-component");
    expect(dn)
  });
});
