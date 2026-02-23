import { describe, test, it, expect } from "vitest";
import { max } from "./app.js";

// ? best practice is to use the name of the function or unit as the name in the first argument
// ? in the callback, we define 1 or more test cases
describe("max", () => {
    // ? first argument is test case name
    it("should return the first argument if it is greater", ()=> {
        // * AAA Pattern
        // ? Arrange ( Data and configuration )
        const a = 2;
        const b = 1;

        // ? Act ( Perform the action )
        const result = max(a, b);

        // ? Assert ( Check Outcome )
        expect(result).toBe(2);

        // ? can be simplified to:
        // expect(max(2,1).toBe(2));

    })
});