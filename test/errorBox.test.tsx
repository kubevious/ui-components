import React from 'react';
import 'jest'

import { ErrorBox } from "../src";
import { fireEvent, render } from "@testing-library/react";

function renderErrorBox() {
  const error : Error = {
    name: 'SampleError',
    message: "my message",
    stack: "aaa bbb ccc"
  }

  const closeError = () => {}

  return render(<ErrorBox error={error} closeError={closeError}/>);
}

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
