import * as React from "react";
import { fireEvent, render, screen } from "@src/testUtils";
import { Button } from "../Button";

describe("Component: Button", () => {
  test("ui", () => {
    const { container } = render(<Button type="button" />);
    expect(container).toMatchSnapshot();
  });

  test("button with text", () => {
    const { container } = render(<Button type="button">TestTitle</Button>);

    expect(container).toHaveTextContent("TestTitle");
  });

  test("button is clickable", () => {
    const clickSpy = jest.fn();

    render(
      <Button type="button" onClick={clickSpy}>
        TestTitle
      </Button>
    );

    fireEvent.click(screen.getByText("TestTitle"));
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
});
