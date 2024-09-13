import { moneyformater } from "../scripts/utils/moneyformat.js";

describe("test suite: formatcurrency", () => {
  it("converts cents into dollars", () => {
    expect(moneyformater(2094)).toEqual("20.94");
  });
  it("works with zero", () => {
    expect(moneyformater(0)).toEqual("0.00");
  });
  it("rounding to nearest cent", () => {
    expect(moneyformater(2000.5)).toEqual("20.00");
  });
});
