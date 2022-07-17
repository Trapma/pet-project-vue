import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/UI";
import router from "@/router/router";
// import Vintersection from "@/directives/Vintersection";
import directives from "./directives";

const app = createApp(App);
// регистрация компонентов Ui
components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

// app.directive("intersection", Vintersection);

app.use(router).mount("#app");
