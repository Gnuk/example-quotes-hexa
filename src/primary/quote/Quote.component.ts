import { Component, Inject, Vue } from "vue-property-decorator";
import { QuoteRepository } from "@/domain/QuoteRepository";

@Component
export default class QuoteComponent extends Vue {
  author = "";
  message = "";

  @Inject()
  private quoteRepository!: () => QuoteRepository;

  created(): void {
    this.retrieve();
  }

  private async retrieve() {
    const quote = await this.quoteRepository().get();
    this.author = quote.author.get();
    this.message = quote.message;
  }
}
