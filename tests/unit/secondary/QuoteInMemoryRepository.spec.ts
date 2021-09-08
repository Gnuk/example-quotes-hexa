import { QuoteInMemoryRepository } from "@/secondary/QuoteInMemoryRepository";
import { Quote } from "@/domain/Quote";
import { Author } from "@/domain/Author";

describe("QuoteInMemoryRepository", () => {
  it("Should get", async () => {
    const repository = new QuoteInMemoryRepository();

    const quote = await repository.get();

    expect(quote).toEqual<Quote>({
      author: Author.of("Willou Shakespear"),
      genre: "comedy",
      message: "To test or not to test, that is the question",
    });
  });
});
