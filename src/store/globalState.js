// 大菠萝
import { defineStore } from "pinia";

export const defaultGlobalState = {
  authModalVisible: false,
};

export const useGlobalState = defineStore("globalState", {
  state() {
    return defaultGlobalState;
  },
});
