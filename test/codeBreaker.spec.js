import codeBreakerGame from "../api/utils/codeBreakerGame.js";

describe("Testing codebreaker", () => {
  test("Todos coinciden XXXX", () => {
    expect(codeBreakerGame("1234", "1234")).toBe("XXXX");
  });

  test("Ninguno coincide", () => {
    expect(codeBreakerGame("1234", "5555")).toBe("");
  });

  test("Caso #1: ----", () => {
    expect(codeBreakerGame("1234", "2143")).toBe("----");
  });

  test("Caso #2: ----", () => {
    expect(codeBreakerGame("1234", "2413")).toBe("----");
  });

  test("Caso #3: ----", () => {
    expect(codeBreakerGame("1234", "3421")).toBe("----");
  });

  test("Validar X---", () => {
    expect(codeBreakerGame("1234", "1342")).toBe("X---");
  });

  test("Validar XX--", () => {
    expect(codeBreakerGame("1234", "1243")).toBe("XX--");
  });

  test("Validar X", () => {
    expect(codeBreakerGame("1234", "1555")).toBe("X");
  });

  test("Validar XX", () => {
    expect(codeBreakerGame("1234", "1255")).toBe("XX");
  });

  test("Validar XXX", () => {
    expect(codeBreakerGame("1234", "1235")).toBe("XXX");
  });

  test("Validar -", () => {
    expect(codeBreakerGame("1234", "4555")).toBe("-");
  });

  test("Validar --", () => {
    expect(codeBreakerGame("1234", "2551")).toBe("--");
  });

  test("Validar ---", () => {
    expect(codeBreakerGame("1234", "2351")).toBe("---");
  });
});
