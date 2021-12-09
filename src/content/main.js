/*
 * @Author: your name
 * @Date: 2021-09-01 16:18:57
 * @LastEditTime: 2021-12-09 14:06:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3ChromeCtx\src\content\components\main.ts
 */
import Vue from "vue";
import app from "./components/app.vue";
import ElementUi from "element-ui";
Vue.use(ElementUi);
Vue.config.productionTip = false;
joinContent(app);
injectJsInsert();
function joinContent(element) {
  const div = document.createElement("div");
  div.id = "joinContentApp";
  document.body.appendChild(div);
  new Vue({
    render: (h) => h(element),
  }).$mount("#joinContentApp");
}

function injectJsInsert() {
  document.addEventListener("readystatechange", () => {
    const injectPath = "js/inject.js";
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = chrome.extension.getURL(injectPath);
    document.body.appendChild(script);
  });
}

let ViewIcons = document.createElement("style");
ViewIcons.type = "text/css";
ViewIcons.textContent = `
  @font-face {
      font-family: "element-icons";
      src:url('${window.chrome.extension.getURL(
        "fonts/element-icons.woff"
      )}') format('woff'),
      url('${window.chrome.extension.getURL(
        "fonts/element-icons.ttf"
      )}') format('truetype');
  }
`;
document.head.appendChild(ViewIcons);
