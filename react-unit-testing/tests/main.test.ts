import { describe, it, expect } from "vitest";

class MainTestSuite {
  public run() {
    this.alwaysTruthy();
  }

  private alwaysTruthy() {
    describe("group", () => {
      it("Should", () => {
        expect(1).toBeTruthy();
      });
    });
  }
}

new MainTestSuite().run();
