import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
const router = useRouter();
// const {post, get} = useNuxtApp().$publicApi //gg wp

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
    async createNewUser(userFormRegistration: userRegistrationForm) {
      try {
        const data = await useNuxtApp().$publicApi.post("user/register", userFormRegistration);
        router.push({ path: "/code" });
      } catch (e) {
        console.log(e);
      }
    },
    async loginUser(req: { email: string; password: string }) {
      try {
        const data = await useNuxtApp().$publicApi.post("user/login", req);
        console.log(data.data);
      } catch (e) {
        console.log(e);
      }
    },
    async verifyCode(userCode: Code) {
      try {
        const data = await useNuxtApp().$publicApi.post("user/code", userCode);
      } catch (e) {
        console.log(e);
      }
    },
    async createNewPassword(userNewPassword: newPassword) {
      debugger;
      console.log(userNewPassword);
    },
    async restorePassword(email: string) {
      debugger;
      console.log(email);
    },
  },
});
