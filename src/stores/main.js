import { defineStore } from "pinia";
import { storage } from "@/utils/index.js";

const useMainStore = defineStore("main", {
  state: () => ({
    isHome: true,
    menuActive: String(storage("menuActive")),
  }),
  actions: {},
});

export default useMainStore;
