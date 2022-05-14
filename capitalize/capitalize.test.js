import { expect } from "expect"
import capitalize from "./capitalize"


describe('Test dadf cap stuff', () => {
  test("basic capitalization", () => {
    expect(capitalize("test")).toMatch("Test");
  })

  test("blank", () => {
    expect(capitalize("")).toMatch("");
  })

  test("What if the thing does not start with a letter?", () => {
    expect(capitalize("6555")).toMatch("6555");
  })

  test("What if the thing does not start with a letter?", () => {
    expect(capitalize(".6555")).toMatch(".6555");
  })

  test("What if the thing does not start with a letter?", () => {
    expect(capitalize("!6555")).toMatch("!6555");
  })
})

describe('Test some cap stuff', () => {
  test("basic capitalization", () => {
    expect(capitalize("test")).toMatch("Test");
  })

  test("blank", () => {
    expect(capitalize("")).toMatch("");
  })

  test("What if the thing does not start with a letter?", () => {
    expect(capitalize("6555")).toMatch("6555");
  })

  test("What if the thing does not start with a letter?", () => {
    expect(capitalize(".6555")).toMatch(".6555");
  })

  test("What if the thing does not start with a letter?", () => {
    expect(capitalize("!6555")).toMatch("!6555");
  })
})  