/*
 * @Author: your name
 * @Date: 2021-09-01 16:21:11
 * @LastEditTime: 2021-09-02 15:46:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3ChromeCtx\src\popup\main.ts
 */
import Vue from "vue";
import App from "./components/app.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
