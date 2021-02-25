import React from 'react';

import { CopyClipboard, ErrorBox, Diagram } from "../src";
import { fireEvent, render } from "@testing-library/react";

function renderCopyClipboard() {
  return render(<CopyClipboard text={'Test text'} />);
}

function renderDiagram() {
  return render(<Diagram />);
}

function renderErrorBox() {
  const error = {
    data: {
        message: 'message',
        stack: 'stack',
    },
    status: 400
  }

  const closeError = () => {}

  return render(<ErrorBox error={error} closeError={closeError}/>);
}

describe("<CopyClipboard />", () => {
  test("Should check that the component CopyClipboard is rendered", async () => {
    const { findByTestId } = renderCopyClipboard();
    
    const copyClipboard = await findByTestId("copy-clipboard");

    expect(copyClipboard)
  });
});

describe("<ErrorBox />", () => {
  test("Should check that the component ErrorBox is rendered", async () => {
    const { findByTestId } = renderErrorBox();

    const errorBox = await findByTestId("error-box");

    expect(errorBox)
  });

  test("Should check that the component ErrorBox is expanded", async () => {
    const { findByTestId } = renderErrorBox();

    const errorBoxNonExpanded = await findByTestId("error-box-non-expanded");
    expect(errorBoxNonExpanded)

    fireEvent.click(errorBoxNonExpanded);

    const errorBoxExpanded = await findByTestId("error-box-expanded");
    expect(errorBoxExpanded)
  });
});

describe("<Diagram />", () => {
  test("Should check that the component Diagram is rendered", async () => {
    const { findByTestId } = renderDiagram();
    
    const diagram = await findByTestId("diagram");

    expect(diagram)
  });
});
