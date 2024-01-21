// 大菠萝
import { defineStore } from "pinia";
// Utils
import { localStorage } from "@/utils";

export const defaultUserState = {
  id: -1,
  email: "",
  fullname: "",
  createTime: "",
  token: "",
};

export const useUser = defineStore("user", {
  state() {
    return defaultUserState;
  },

  actions: {
    initUserFromLocal() {
      if (!window) return;
      this.$state = localStorage.get("user", defaultUserState);
    },

    logout() {
      localStorage.set("user", defaultUserState);
      this.$state = defaultUserState;
    },
  },

  getters: {
    isAuthenticated({ token }) {
      return token !== "";
    },
  },
});
