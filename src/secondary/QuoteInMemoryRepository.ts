import { QuoteRepository } from "@/domain/QuoteRepository";
import { Quote } from "@/domain/Quote";
import { Author } from "@/domain/Author";

export class QuoteInMemoryRepository implements QuoteRepository {
  async get(): Promise<Quote> {
    return {
      author: Author.of("Willou Shakespear"),
      genre: "comedy",
      message: "To test or not to test, that is the question",
    };
  }
}
