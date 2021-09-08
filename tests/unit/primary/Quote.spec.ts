import { shallowMount, Wrapper } from "@vue/test-utils";
import { QuoteComponent, QuoteVue } from "@/primary/quote";
import { QuoteInMemoryRepository } from "@/secondary/QuoteInMemoryRepository";

let wrapper: Wrapper<QuoteComponent>;
let component: QuoteComponent;

const wrap = async (): Promise<void> => {
  wrapper = shallowMount<QuoteComponent>(QuoteVue, {
    provide: {
      quoteRepository: () => new QuoteInMemoryRepository(),
    },
  });
  component = wrapper.vm;

  await new Promise((resolve) => setTimeout(resolve, 0));
};

describe("Quote.vue", () => {
  it("should exists", async () => {
    await wrap();

    expect(wrapper.exists()).toBe(true);
  });

  it("Should have quote information", async () => {
    await wrap();

    expect(component.author).toBe("Willou Shakespear");
    expect(component.message).toBe(
      "To test or not to test, that is the question"
    );
  });
});
