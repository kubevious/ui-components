import React from 'react';
import 'jest'

import { Link } from "../src";
import { render } from "@testing-library/react";

function renderLink() {
  return render(<Link name={'Test'} path={'test'} />);
}

describe("<Link />", () => {
  test("Should check that the component Link is rendered", async () => {
    const { findByTestId } = renderLink();
    
    const link = await findByTestId("link");

    expect(link)
  });
});
