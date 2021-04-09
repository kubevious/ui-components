import React from 'react';
import 'jest'

import { YamlControlBar } from "../src";
import { render } from "@testing-library/react";

function renderYamlControlBar() {
  const handleBeforeChange = ({
    value,
  }: {
    value: string
  }): void => {
    console.log(value)
  }

  return render(<YamlControlBar value={'test value'} beforeChange={handleBeforeChange} />);
}

describe("<YamlControlBar />", () => {
  test("Should check that the component YamlControlBar is rendered", async () => {
    const { findByTestId } = renderYamlControlBar();

    const yamlControlBar = await findByTestId("yaml-control-bar");
    expect(yamlControlBar)
  });
});
