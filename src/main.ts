import Vue from "vue";
import { QuoteVue } from "@/primary/quote";
import { QuoteRepository } from "@/domain/QuoteRepository";
import { QuoteGardenRepository } from "@/secondary/QuoteGardenRepository";
import axios from "axios";

Vue.config.productionTip = false;

const axiosGarden = axios.create({
  baseURL: "https://quote-garden.herokuapp.com",
});

const quoteRepository: QuoteRepository = new QuoteGardenRepository(axiosGarden);

new Vue({
  render: (h) => h(QuoteVue),
  provide: {
    quoteRepository: () => quoteRepository,
  },
}).$mount("#app");
