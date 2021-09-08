import { Quote } from "@/domain/Quote";

export interface QuoteRepository {
  get(): Promise<Quote>;
}
