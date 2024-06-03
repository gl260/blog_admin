import { defineStore } from "pinia";

const useMenuStore = defineStore("menu", {
  state: () => ({
    sidebar: [],
  }),
  actions: {},
});

export default useMenuStore;
