import { Author } from "@/domain/Author";

describe("Author", () => {
  it("Should not build with blank name", () => {
    expect(() => Author.of(" ")).toThrow("Author name is blank.");
  });

  it("Should get", () => {
    expect(Author.of("Georges Orwell").get()).toBe("Georges Orwell");
  });

  it("Should normalize name", () => {
    expect(Author.of(" Georges Orwell\t  ").get()).toBe("Georges Orwell");
  });
});
