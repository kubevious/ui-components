import React from 'react';
import 'jest'

import { CopyClipboard } from "../src";
import { render } from "@testing-library/react";

function renderCopyClipboard() {
  return render(<CopyClipboard text={'Test text'} />);
}

describe("<CopyClipboard />", () => {
  test("Should check that the component CopyClipboard is rendered", async () => {
    const { findByTestId } = renderCopyClipboard();
    
    const copyClipboard = await findByTestId("copy-clipboard");

    expect(copyClipboard)
  });
});
