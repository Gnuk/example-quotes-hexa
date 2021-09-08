import { Quote } from "@/domain/Quote";
import { Author } from "@/domain/Author";

interface RestQuote {
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
}

export interface RestQuotes {
  data: RestQuote[];
}

export const toQuote = (restQuotes: RestQuotes): Quote => {
  const [{ quoteText: message, quoteAuthor: author, quoteGenre: genre }] =
    restQuotes.data;
  return {
    message,
    genre,
    author: Author.of(author),
  };
};
