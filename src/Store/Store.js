import { defineStore } from "pinia";

export const useStore = defineStore("data", {
  state: () => ({
    horizontalTabID: 0,
    hTabHover: -1,
    mainService: "",
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
  },
});
