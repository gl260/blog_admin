import { defineStore } from "pinia";

const useLoginStore = defineStore("login", {
  state: () => ({
    counter: 100,
  }),
  actions: {},
});

export default useLoginStore;
