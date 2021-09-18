import React from 'react';
import 'jest'

import { Popup, CopyClipboard } from "../src";
import { render } from "@testing-library/react";

function renderPopup() {
  function closePopup() {}

  return render(<Popup popupContent={<CopyClipboard text="abcd" />} closePopup={closePopup} />);
}

describe("<Popup />", () => {
  test("Should check that the component Popup is rendered", async () => {
    const { findByTestId } = renderPopup();
    
    const popup = await findByTestId("popup");

    expect(popup)
  });
});
