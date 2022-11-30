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
interface userRegistrationForm {
  email: string;
  username: string;
  password: string;
  birthday?: string;
  phone?: string;
  news?: boolean;
}
interface Code {
  email: string;
  code: string;
}
interface newPassword {
  email: string;
  password: string;
}
export const authUserState = defineStore("authUser", {
  state: (): State => ({
    test: "hello",
    currentUser: {
      accessToken: "",
      refreshToken: "",
      userDto: {
        email: "test@mail.com",
        id: "",
        isActivated: false,
        username: "",
        userRoles: [],
      },
    },
  }),
  actions: {
    createNewUser(userFormRegistration: userRegistrationForm) {
      debugger;
      console.log(userFormRegistration);
    },
    verifyCode(userCode: Code) {
      debugger;
      console.log(userCode);
    },
    createNewPassword(userNewPassword: newPassword) {
      debugger;
      console.log(userNewPassword);
    },
    restorePassword(email: string) {
      debugger;
      console.log(email);
    },
  },
});
