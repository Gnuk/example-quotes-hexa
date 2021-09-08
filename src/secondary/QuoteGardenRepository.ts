import { QuoteRepository } from "@/domain/QuoteRepository";
import { Quote } from "@/domain/Quote";
import { AxiosInstance } from "axios";
import { RestQuotes, toQuote } from "@/secondary/RestQuotes";

export class QuoteGardenRepository implements QuoteRepository {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  get(): Promise<Quote> {
    return this.axiosInstance
      .get<RestQuotes>("api/v3/quotes/random")
      .then((response) => toQuote(response.data));
  }
}
