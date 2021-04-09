import React from 'react';
import 'jest'

import { OperationLog } from "../src";
import { render } from "@testing-library/react";

function renderOperationLog() {
  return render(<OperationLog />);
}

describe("<OperationLog />", () => {
  test("Should check that the component OperationLog is rendered", async () => {
    const { findByTestId } = renderOperationLog();

    const operationLog = await findByTestId("operation-log");

    expect(operationLog)
  });
});
