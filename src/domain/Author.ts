const assertValidName = (name: string): void => {
  if (name.length === 0) {
    throw new Error("Author name is blank.");
  }
};

export class Author {
  private readonly name: string;

  private constructor(name: string) {
    this.name = name.trim();
    assertValidName(this.name);
  }

  static of(name: string): Author {
    return new Author(name);
  }

  get(): string {
    return this.name;
  }
}
