import * as React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@src/testUtils";
import PublicationsPage from "../PublicationsPage";

describe("Component: Button", () => {
  test("that it loads 5 initial cards", async () => {
    render(<PublicationsPage />, {
      wrappers: ["router"],
    });

    const cards = await screen.findAllByTestId("publication-card");
    expect(cards).toHaveLength(5);
  });

  test("that first card has specific title", async () => {
    render(<PublicationsPage />, {
      wrappers: ["router"],
    });

    const cards = await screen.findAllByTestId("publication-card");
    expect(cards[0]).toHaveTextContent("Why Content Experiences? (copy 1)");
  });

  test("that filter apply's to cards", async () => {
    render(<PublicationsPage />, {
      wrappers: ["router"],
    });

    // wait for content
    await screen.findAllByTestId("publication-card");

    // get button "add-filter" and click it
    fireEvent.click(screen.getByTestId("add-filter"));

    //chose filter
    fireEvent.click(screen.getByTestId("filter-field"));
    fireEvent.click(screen.getByText("name"));

    fireEvent.click(screen.getByTestId("filter-type"));
    fireEvent.click(screen.getByText("Equals"));

    fireEvent.change(screen.getByTestId("filter-value"), {
      target: {
        value: "Why Content Experiences? (copy 1)",
      },
    });

    fireEvent.click(screen.getByText("Filter"));

    await screen.findByText(/loading/i);
    const card = await screen.findAllByTestId("publication-card");

    expect(card).toHaveLength(1);
    expect(card[0]).toHaveTextContent("Why Content Experiences? (copy 1)");
  });
});
