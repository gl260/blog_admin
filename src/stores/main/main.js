import { defineStore } from "pinia";

const useMainStore = defineStore("main", {
  state: () => ({
    isHome: true,
  }),
  actions: {},
});

export default useMainStore;
