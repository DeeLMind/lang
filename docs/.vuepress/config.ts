import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import {defineUserConfig} from "vuepress";
import {redirectPlugin} from "vuepress-plugin-redirect";
import {addCustomElement} from "vuepress-shared";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  extendsBundlerOptions: (bundlerOptions, app) => {
    addCustomElement(bundlerOptions, app, "rapi-doc");
  },

  theme,

  plugins: [
    registerComponentsPlugin({
      componentsDir: "docs/.vuepress/components",
    }),
    redirectPlugin(),
  ],
});
