import { describe, expect, it } from "vitest";
import { toDTG } from "../src";

describe("toDTG", () => {
  it("should be defined", () => {
    expect(toDTG).toBeDefined;
  });

  it("should return the correct dtg", () => {
    const date = new Date("August 19, 2022 23:15:30 UTC+2");
    const dtg = toDTG(date);
    expect(dtg).toBe("192315aug22");
  });
});
