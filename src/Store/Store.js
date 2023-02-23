import { defineStore } from "pinia";

export const useStore = defineStore("data", {
  state: () => ({
    horizontalTabID: 0,
    hTabHover: -1,
    mainService: "",
    tradeServiceIndex: 0,
    tradeServiceHover: -1,
    tradeService: "",
  }),
  actions: {
    setTabHorizontal(index) {
      this.horizontalTabID = index;
    },
    setHTabHover(index) {
      this.hTabHover = index;
    },
    setMainService(service) {
      this.mainService = service;
    },
    setTradeServiceIndex(index) {
      this.tradeServiceIndex = index;
    },
    setTradeServiceHover(index) {
      this.tradeServiceHover = index;
    },
    setTradeService(service) {
      this.tradeServiceIndex = service;
    },
  },
});
