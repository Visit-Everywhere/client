import { defineStore } from "pinia";

interface State {
  test: string;
}

export const authUserState = defineStore("authUser", {
  state: (): State => ({
    test: "hello",
  }),
  actions: {
    test(): void {
      console.log(this.test);
    },
  },
});
