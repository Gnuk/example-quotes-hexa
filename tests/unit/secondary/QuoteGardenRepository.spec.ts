import { AxiosInstance, AxiosResponse } from "axios";
import sinon, { SinonStub } from "sinon";
import { QuoteGardenRepository } from "@/secondary/QuoteGardenRepository";
import { Author } from "@/domain/Author";
import { RestQuotes } from "@/secondary/RestQuotes";

interface AxiosInstanceStub extends AxiosInstance {
  get: SinonStub;
}

const stubAxiosInstance = (): AxiosInstanceStub =>
  ({ get: sinon.stub() } as AxiosInstanceStub);

const EXAMPLE_RESPONSE: RestQuotes = {
  data: [
    {
      quoteText:
        "I think that animals aren't less intelligent than humans, they're just of a different intelligence. We have five million smell-sensitive cells in our nose, they have two hundred and fifty million - they can smell emotion. They can smell different types of emotion, they just have another type of intelligence.",
      quoteAuthor: "Mike Mills",
      quoteGenre: "intelligence",
    },
  ],
};
describe("QuoteGardenRepository", () => {
  it("Should get", async () => {
    const axiosInstance: AxiosInstanceStub = stubAxiosInstance();
    axiosInstance.get.resolves({ data: EXAMPLE_RESPONSE });
    const repository = new QuoteGardenRepository(axiosInstance);

    const quote = await repository.get();

    const [url] = axiosInstance.get.getCall(0).args;
    expect(url).toBe("api/v3/quotes/random");
    expect(quote.genre).toBe("intelligence");
    expect(quote.message).toBe(
      "I think that animals aren't less intelligent than humans, they're just of a different intelligence. We have five million smell-sensitive cells in our nose, they have two hundred and fifty million - they can smell emotion. They can smell different types of emotion, they just have another type of intelligence."
    );
    expect(quote.author.get()).toBe("Mike Mills");
  });
});
