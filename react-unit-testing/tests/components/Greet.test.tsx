import React from "react";
import { it, expect, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Greet from "../../src/components/Greet";

// ? Things you need to consider while testing:
// ? - if it has props, test with different props.
// ? - if it has events ( click, input, etc... ) simulate these events

afterEach(() => {
  cleanup();
});

class GreetTestSuite {
  public run() {
    describe("Greet", () => {
      it("should render Hello with the name when the name is provided", () => {
        render(<Greet name={"Yahya"} />);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/hello yahya/i);
      });

      it("should render Hello without the name when the name isn't provided", () => {
        render(<Greet />);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/No Name Specified!/i);
      });
    });
  }
}

new GreetTestSuite().run();
