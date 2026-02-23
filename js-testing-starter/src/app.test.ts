import { describe, test, it, expect } from "vitest";
import { App } from "./app.js";

class AppTestSuite {
  constructor(private readonly app: App) {}
  public run() {
    // ? best practice is to use the name of the function or unit as the name in the first argument
    // ? in the callback, we define 1 or more test cases
    describe("max", () => {
      // ? first argument is test case name
      it("should return the first argument if it is greater", () => {
        // * AAA Pattern
        // ? Arrange ( Data and configuration )
        const a = 2;
        const b = 1;

        // ? Act ( Perform the action )
        const result = this.app.max(a, b);

        // ? Assert ( Check Outcome )
        expect(result).toBe(2);

        // ? can be simplified to:
        // expect(max(2,1)).toBe(2);
      });

      // second test case
      it("should return the second argument if it is greater", () => {
        expect(this.app.max(1, 2)).toBe(2);
      });

      // third test case
      it("should return the first argument if arguments are equal", () => {
        expect(this.app.max(2, 2)).toBe(2);
      });
    });
  }
}

new AppTestSuite(new App()).run();
