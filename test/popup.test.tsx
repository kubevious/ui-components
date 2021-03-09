import React from 'react';
import 'jest'

import { Popup } from "../src";
import { render } from "@testing-library/react";

function renderPopup() {
  return render(<Popup />);
}

describe("<Popup />", () => {
  test("Should check that the component Popup is rendered", async () => {
    const { findByTestId } = renderPopup();
    
    const popup = await findByTestId("popup");

    expect(popup)
  });
});
