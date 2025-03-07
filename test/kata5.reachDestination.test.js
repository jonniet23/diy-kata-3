const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours");
  });
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(107, 34)).toBe("I should be there in 3.5 hours");
  });
});
