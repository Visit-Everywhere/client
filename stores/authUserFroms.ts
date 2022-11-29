import { defineStore } from "pinia";

interface userDto {
  email: string;
  id: string;
  isActivated: boolean;
  username: string;
  userRoles: string[];
}
interface userResponse {
  accessToken: string;
  refreshToken: string;
  userDto: userDto;
}
interface State {
  test: string;
  currentUser: userResponse;
}

export const authUserState = defineStore("authUser", {
  state: (): State => ({
    test: "hello",
    currentUser: {
      accessToken: "",
      refreshToken: "",
      userDto: {
        email: "",
        id: "",
        isActivated: false,
        username: "",
        userRoles: [],
      },
    },
  }),
  actions: {
    test(): void {
      console.log(this.test);
    },
  },
});
